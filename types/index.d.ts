export interface UserItem {
    email: string;
    password: string;
}

export interface InterfaceData {
    code: number;
    data: any;
}

export interface HeaderName {
    label: string;
    jump: string;
}

export interface ArticleClass {
    label: string;
    icon: string;
    content: any;
}

export interface ArticleTitle {
    title: string;
    _id: string;
}

export interface ArticleParams {
    author: string;
    title: string;
    time: string;
    tags: string;
    content: string;
    contentMD: string;
}


declare module 'vue/types/vue' {
    export interface Vue {
        $util: any;
        $api: any;
        $lo: any;
    }
}

export as namespace Types
