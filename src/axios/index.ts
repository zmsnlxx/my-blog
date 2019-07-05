import apiList from './api/index';


const install = (Vue: any): any => {
    // @ts-ignore
    if (install.installed) {
        // @ts-ignore
        return install.installed = true;
    }
    /*定义属性到Vue原型中*/
    Object.defineProperties(Vue.prototype, {
        $api: {
            get() {
                return apiList;
            },
        },
    });
};
export default {
    install,
};

