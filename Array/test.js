var isAnagram = function(s, t) {
    if(s.length == t.length){
        n=s.length;
        let count=0;
        for(i=0;i<n;i++){
            for(j=0;j<n;j++){
                if(s[i]==t[j]){
                    count=count+1;
                }
            }
        }
        if(count==n){
            return "true"
        }else{
            return "false"
        }
    }else{
        return "false";
    }
};
console.log(isAnagram("car","rat"))