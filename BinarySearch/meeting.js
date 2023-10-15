// "Given an array of meeting time intervals intervals where intervals[i] = [starti, endi], 
// return the minimum number of conference rooms required.

// Input: intervals = [[0,30],[5,10],[15,20]]
// Output: 2

// Input: intervals = [[7,10],[2,4]]
// Output: 1"

function canAttendMeeting(intervals){
    if(intervals.length<1){
        return 0
    }
    const starts=intervals.map((intervals)=>intervals[0]).sort((a,b)=>a-b);
    const ends=intervals.map((intervals)=>intervals[1]).sort((a,b)=>a-b);
    let rooms=0;
    let end=0;
    for(let i=0;i<intervals.length;i++){
        if(starts[i]<ends[end]){
            rooms++;
        }else{
            end++
        }
    }
    return rooms;
}
console.log(canAttendMeeting([[7,10],[2,4]]))