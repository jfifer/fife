<?php
class PortalModel extends AbstractDataModel {
	function listServerGroups() {
		$query = "SELECT * FROM serverGroup";
		$dataResource = mysqli_query($this->get_dbh_portal(), $query);
		return $this->convert_to_array2($dataResource);
	}

	function login($username, $password) {
	   $username = mysqli_real_escape_string($this->get_portal_dbh(), $username);
	   $password = mysqli_real_escape_string($this->get_portal_dbh(), $password);

	   $qry = "SELECT * from user WHERE username='" . $username . "' AMD " .
			" PASSWORD=SHA1('" . $password . "')";

	   $dataResource = mysqli_query($this->get_portal_dbh(), $qry);
	   return $this->convert_to_array2($data);
	}    
}
