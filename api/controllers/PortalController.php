nttools:/var/www/html$ sudo vi api/controllers/PortalController.php 
jfifer@inttools:/var/www/html$ sudo vi api/controllers/PortalController.php 

<?php
include_once 'AbstractController.php';

class PortalController extends AbstractController {
    public function getAction($request) {
        if(isset($request->url_elements[2])) {
           $query = $request->url_elements[2];
           switch($query) {
             case 'auth' :
                $model = new PortalModel();
                if(isset($request->url_elements[3]) && isset($request->url_elements[4])) {
                  $username = $request->url_elements[3];
                  $password = $request->url_elements[4];
                  $data = $model->login($username, $password);
                } else {
                  $data = $model->logout();
                }
             default:
                break;
           }
        } else {
           $data = $this->errorResponse("Invalid Request");
        }
        return $data;
    }

    public function postAction($request) {
    }
}


?>
