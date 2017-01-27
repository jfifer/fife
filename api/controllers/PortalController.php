<?php
include_once 'AbstractController.php';

class PortalController extends AbstractController {
    public function getAction($request) {
	if(isset($request->url_elements[2])) {
		return "fuck";
	} else {
		$model = new PortalModel();
		$data = $model->listServerGroups();
	}
	return $data;
    }
    
    public function postAction($request) {     
    }
}


?>
