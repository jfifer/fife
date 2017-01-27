<?php
class PortalModel extends AbstractDataModel {
	function listServerGroups() {
		$query = "SELECT * FROM serverGroup";
		$dataResource = mysqli_query($this->get_dbh_portal(), $query);
		return $this->convert_to_array2($dataResource);
	}    
}
