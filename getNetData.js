/**
 * 网络数据
 */
let dataNet = {
    URL: 'http://47.97.194.160/',
    AppKey: "6MW1ZKhDcNPhDjEixdYbP9eWOgjbBtXM",
    AppSecret: "a9jIWZ0zlTPoXoZc29scjipHhJPI9WgN",
    accessToken: 'access/token',
    viewTokenFileId: 'view/token/fileId',
    viewTokenIntegrateId: 'view/token/integrateId',
    IntegrateId: 2079624672110912,
    FiledId:2112063376124352
}
var result;
$.ajax({
    url: dataNet.URL+dataNet.viewTokenFileId,
    type:'post',
    dataType:'json',
    async: false,
    data:{appKey:dataNet.AppKey,appSecret:dataNet.AppSecret,fileId: dataNet.FiledId},
    success:function(readyState){//请求成功后执行的代码
        result = readyState;
		//console.log(result)
    },
    error:function(res){//失败后执行的代码
    }
});


