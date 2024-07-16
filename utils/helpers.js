const formatDate = (dateString)=>{
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}-${day}-${year}`


}
module.exports={
    formatDate 
};