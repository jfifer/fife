<?php
class PortalModel extends AbstractDataModel {
	function listServerGroups() {
		$query = "SELECT * FROM serverGroup";
		$dataResource = mysqli_query($this->get_dbh_portal(), $query);
		return $this->convert_to_array2($dataResource);
	}

	function login($username, $password) {
	   $username = mysqli_real_escape_string($this->get_dbh_portal(), $username);
	   $password = mysqli_real_escape_string($this->get_dbh_portal(), $password);

	   $qry = "SELECT SHA1(userId) as uid from user WHERE username='" . $username . "' AND" .
			" PASSWORD=SHA1('" . $password . "')";
	   
	   $dataResource = mysqli_query($this->get_dbh_portal(), $qry);
	   $data = mysqli_fetch_assoc($dataResource);
	   if($data) {
             session_start();
	     $_SESSION['uid'] = $data['uid'];	
	     return $data['uid'];
	   } else {
	     return false;
	   }
	}

	function authCheck() {
	   session_start();
	   if(isset($_SESSION['uid'])) {
	     return array("uid"=>$_SESSION['uid']);
	   }
	   return array("uid"=>-1);
	}

        function logout() {
	   session_unset();
	   session_destroy();
	   return true;
	}    
}
