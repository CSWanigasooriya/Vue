<template>

    <div class="container">
    <div class="row">
      <div class="col s12 m12">
        <div class="card" >
          <div class="card-content">
            <table class="responsive-table striped" style="width:30%">
              <thead>
                <tr>
                  <th>Current year:</th>
                  <td>2</td>
                </tr>
                <tr>
                  <th>Current semester:</th>
                  <td>4</td>
                </tr>
                <tr>
                  <th>GPA:</th>
                  <td>3.96</td>
                </tr>
              </thead>
            </table>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <select class="form-select" aria-label="Default select example" style="width:30%; margin-top:3%">
              <option selected>Semester 4</option>
              <option value="1">Semester 3</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 1</option>
          </select>
          <table class="responsive-table highlight" style="width:40%;margin-top:2%">
            <tr>
              <thead><th>GPA</th><td>3.6</td></thead>
            </tr>
          </table>
            <table class="responsive-table highlight" style="margin-top:2%">
              <thead>
                <tr> 
                  <th>Course</th>
                  <th>Assignment 1</th>
                  <th>Assignment 2</th>
                  <th>Assignment 3</th>
                  <th>Examination</th>
                  <th>Final</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>DSA 2</td>
                  <td>80</td>
                  <td>65</td>
                  <td>74</td>
                  <td>87</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>SPM</td>
                  <td>80</td>
                  <td>65</td>
                  <td>74</td>
                  <td>87</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>CIM</td>
                  <td>80</td>
                  <td>65</td>
                  <td>74</td>
                  <td>87</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>SDI</td>
                  <td>80</td>
                  <td>65</td>
                  <td>74</td>
                  <td>87</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>CIM</td>
                  <td>80</td>
                  <td>65</td>
                  <td>74</td>
                  <td>87</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>CIM</td>
                  <td>80</td>
                  <td>65</td>
                  <td>74</td>
                  <td>87</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>CIM</td>
                  <td>80</td>
                  <td>65</td>
                  <td>74</td>
                  <td>87</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.card {
  border-radius: 1em;
  height: 42em;
}
.container{
  margin-left: -1%;
}
.card-content{
  padding:5%;
  overflow-y:auto
}
/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(248, 245, 255);

}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #5a5ecf;
  border-radius: 20em;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
