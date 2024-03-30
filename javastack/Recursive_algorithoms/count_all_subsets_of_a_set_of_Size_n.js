function count_all_subsets(n) {
    if(n === 0) return 1
    return 2 * count_all_subsets(n - 1)
}
// 0/1/2 are base cases

//Count All Subsets Of A Set Of Size N - recursivly geerates all subsets by using that there are 2 times as many subsets in n-1 then n?
//legit is just 2 * number = how many subsets there are11
