function AppController ($scope,httpPostService){

    console.info("Initialized");

    $scope.title="Bootstrapped!";

    $scope.codeList=codes;

    $scope.keywordList=[];

    $scope.resultList=[];

    $scope.inResultList=function(code){

        var result=false;

        for(var o in $scope.resultList){
            if(code==$scope.resultList[o].code.toLowerCase()){
                result=true;
            }
        }

        return result;
    };

    $scope.generateKeywordsSearchQuery = function(){

        $scope.searchKeyList=[];

        for(var o1 in $scope.keywordList){
            var keyword = $scope.keywordList[o1];

            $scope.searchKeyList.push(
                {
                    "query_string":{
                        "default_field":"_all",
                        "query":keyword
                    }
                }
            )
        }

        $scope.searchKeyList.push(
            {
                "query_string":{
                    "default_field":"_all",
                    "query":$scope.newTerm+"*"
                }
            }
        )

    };

    $scope.addTerm = function(){
        $scope.keywordList.push($scope.newTerm);
        $scope.resultList=[];

        $scope.filterList();
        $scope.newTerm="";
    };

    $scope.removeTerm = function(index){
        $scope.keywordList.splice(index, 1);
        $scope.resultList=[];
        $scope.filterList();
        $scope.newTerm="";
    };


    $scope.filterList = function(){

        $scope.resultList=[];

        $scope.generateKeywordsSearchQuery();

        var query = {
            "query" : {
                "bool":{
                    "must":
                        $scope.searchKeyList,

                    "must_not":[],
                    "should":[]
                }
            },
            "from":0,
            "size":100,
            "sort":[],
            "facets":
            {}
        };

        console.log(query);

        httpPostService("http://ec2-54-85-4-114.compute-1.amazonaws.com:9200/icd/_search",query).
            success(function(data, status, headers, config) {

                var hits = data.hits.hits;

                for(var o in hits){
                    var obj=hits[o]._source;

                    $scope.resultList.push({code:obj.code, description:obj.description, block:obj.block, chapter:obj.chapter})

                }

            }).
            error(function(data, status, headers, config) {
                console.log("Error, status is " + status);
                console.log(data);
            });

    };

    $scope.filterList();


}