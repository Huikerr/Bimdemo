/**
 * 加载模型
 */
let viewToken = result.data;
loaderConfig = new BimfaceSDKLoaderConfig();
loaderConfig.viewToken = viewToken;
loaderConfig.visualStyle = "bake";
var viewer3D;
BimfaceSDKLoader.load(loaderConfig,success,failure)
function success(){
    let domShow = document.getElementById('domId');
    let webConfig = new Glodon.Bimface.Application.WebApplication3DConfig();
    webConfig.domElement = domShow;
    webConfig.effectMode = "fluency";//流畅模式
    //webConfig.Buttons = [];
    //webConfig.Toolbars = [];
    app = new Glodon.Bimface.Application.WebApplication3D(webConfig);
    app.addView(viewToken);
    viewer3D = app.getViewer();
    viewer3D.addEventListener(Glodon.Bimface.Viewer.Viewer3DEvent.ViewAdded, function () {
        //viewer3D.hideViewHouse();
        BlueSkyBox();
        setCameraStatus1();
        //zoomToSelectedComponents1('69');
        //zoomToSelectedComponents1('70');
        //zoomToSelectedComponents1('2763');
        //zoomToSelectedComponents1('61');
        //zoomToSelectedComponents1('72');
        //zoomToSelectedComponents1('74');
        //zoomToSelectedComponents1('73');
        viewer3D.render();// 渲染三维模型
    });
}
function failure(error){
    console.log(error);
}


/**
 * 相机设置1
 */
function setCameraStatus1() {
    let cameraState = viewer3D.getCameraStatus();
    cameraState.aspect = 2.030949839914621;
    cameraState.coordinateSystem = "world";
    cameraState.far = 5456340.192483634;
    cameraState.fov = 45;
    cameraState.name = "persp";
    cameraState.near = 782.9885732303162;
    cameraState.position = {x: -2800298.6891729087, y: -429579.1949189033, z: 22744.34134350042};
    cameraState.target = {x: 3162125.4744143314, y: 10195999.342041453, z: -1271799.199848122};
    cameraState.up = {x: 0.05170254305081858, y: 0.092138558844754, z: 0.9944030033221392};
    cameraState.version = 1;
    cameraState.zoom = 1;
    viewer3D.setCameraStatus(cameraState);
    let color = new Glodon.Web.Graphics.Color("#0036ff", 0.9);// 新建color对象，指定关注构件被染色的数值
    viewer3D.overrideComponentsColorByObjectData([{elementId: "2763"}], color);// 对关注构件进行着色
    viewer3D.render();// 渲染三维模型
}
/**
 * 天空盒
 */
function BlueSkyBox() {
    let skyBoxManagerConfig = new Glodon.Bimface.Plugins.SkyBox.SkyBoxManagerConfig();// 构造天空盒管理器配置项，并指定Viewer、Option参数
    skyBoxManagerConfig.viewer = viewer3D;
    skyBoxManagerConfig.customizedImage = {// 设置自定义天空盒的图片资源
        front: "../pic/BlueSky/EnvMap_posz.jpg",
        back: "../pic/BlueSky/EnvMap_negz.jpg",
        left: "../pic/BlueSky/EnvMap_negx.jpg",
        right: "../pic/BlueSky/EnvMap_posx.jpg",
        top: "../pic/BlueSky/EnvMap_posy.jpg",
        bottom: "../pic/BlueSky/EnvMap_negy.jpg"
    }
    skyBoxManagerConfig.style = Glodon.Bimface.Plugins.SkyBox.SkyBoxStyle.CloudySky;
    let skyBoxManager = new Glodon.Bimface.Plugins.SkyBox.SkyBoxManager(skyBoxManagerConfig);// 构造天空盒管理器，构造完成后，场景背景即发生变化
    skyBoxManager.setStyle(Glodon.Bimface.Plugins.SkyBox.SkyBoxStyle.BlueSky);// 将天空盒效果设置为蓝天
    skyBoxManager.enableSkyBox(true);
}















