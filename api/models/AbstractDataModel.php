<?php
require_once 'db/config.php';

abstract class AbstractDataModel {

   private $dbh_portal = null;

   private $row_limit = 50;

   function __construct() {

   }

   public function get_row_limit() {
      return $this->row_limit;
   }
   
   function connect_portal_db() {
      // Establish a connection to the database server.
      if($this->dbh_portal == null) {
         $this->dbh_portal = mysqli_connect(DB_SERVER_PORTAL, DB_USER_PORTAL, DB_PASS_PORTAL, DB_NAME_PORTAL, DB_PORT_PORTAL);
         if (mysqli_connect_errno()) {
            $err_params = array();
            $err_params['sql_error'] = mysqli_connect_error($this->dbh_portal);
            $err_params['db_host'] = DB_SERVER_PORTAL;
            $err_params['db_name'] = DB_NAME_PORTAL;
            return false;
         }
      }
      return true;
   }
   function get_dbh_portal() {
      if($this->dbh_portal == null) {
         $this->connect_portal_db();
      }
      return $this->dbh_portal;
   }
   
   function convert_to_array2($dataResource) {
      $newArray = array();
      $var_type = gettype($dataResource);
      if ($var_type == "object") {
         for ($i = 0; $i < mysqli_num_rows($dataResource); $i++) {
            $data = mysqli_fetch_assoc($dataResource);
            foreach ($data as $key => $value) {
               $newArray[$i][$key] = $value;
            }
         }
      }
      return $newArray;
   }
   
   function last_insert_id() {
        return $this->get_dbh_portal()->insert_id;
    }
};
