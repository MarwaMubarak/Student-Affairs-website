function confirmAction() {
    let confirmAction = confirm("Are you sure to Delete this Student");
    if (confirmAction) {
      alert("Student data has been deleted successfully");
    } else {
      alert("deletion canceled");
    }
}