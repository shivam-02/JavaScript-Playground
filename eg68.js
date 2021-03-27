function ReportGenerator(){
    this.title="Financial report for 2020";
    this.getReporter=function(){
        console.log("Setting up the reporter function with title :"+this.title);
        var ab=this;
        return function(){
            console.log(ab.title);
            console.log("some reporting data");
        }
    }
}

var rg=new ReportGenerator();
var reporter=rg.getReporter();
reporter();