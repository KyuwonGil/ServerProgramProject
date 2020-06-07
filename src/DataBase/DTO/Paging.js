
class Paging{
    
    init(){
        this.totalPost = 0
        this.totalPage = 0
        this.pageSize = 0
        this.blockSize = 1
        this.currentPage = 1
        this.firstPage = 1
        this.lastPage = 1
        this.startNo = 1
        this.lastNo = 1
    }

    constructor(){
        this.init()
    }

    setPaging(totalPost, currentPage, pageSize, blockSize){
        this.totalPost = totalPost
        this.currentPage = currentPage
        this.pageSize = pageSize
        this.blockSize = blockSize

        this.totalPage = Math.ceil(this.totalPost/this.pageSize)
        this.firstPage = this.currentPage - (this.currentPage-1) % blockSize
        this.lastPage = this.firstPage + blockSize - 1
        this.startNo = this.currentPage * this.pageSize - this.pageSize + 1
        this.lastNo = this.startNo + this.pageSize - 1
    }
}

module.exports = new Paging()