import axios from './../axios/index';
import Config from './../config/index';
import localStore from './localstore.service';
import inItService from './init.service';

const newsService = {
    /* methods：initFolderService() 获取初始化目录列表信息
   property：folderList 暂时存放获取到的目录列表
   describe ：调用inItSvice缓存目录信息然后获取到新闻目录列表再遍历请求每一个目录下文章列表数据
    */
    queryAllNewsFolder ($this) {
        let $$this = $this;
        return inItService.initFolderService().then(function () {
            newsService.getArticleList($$this);
        });
    },
    // 获取文章列表
    getArticleList ($this) {
        let folderList = [];
        JSON.parse(localStore.getFolderList('initFolderList')).forEach(function (value) {
            if (value.name === '新闻') {
                folderList = value.children;
            }
        }, folderList);
        for (let one in folderList) {
            newsService.queryArticleList(
                {folderId: folderList[one].id, current: 1, size: 10},
                $this, folderList[one].name);
        }
    },
    queryArticleList (folderInfo, $this, folderName) {
        let urlStr = Config.URL_DEFAULT.article.getArticleByFolderId;
        let params = {folderId: folderInfo.folderId, current: folderInfo.current, size: folderInfo.size};
        let $$this = $this;
        try {
            axios.get(urlStr, params).then(function (res) {
                newsService.judgeArticleType(res, folderName, $$this);
            });
        } catch (e) {
            console.log('ErrMessage:', e);
        }
    },
    /*  获取轮播图所需要的信息 */
    getSwiperInfo (TParticleList, $this) {
        for (let one in TParticleList) {
            if (TParticleList.hasOwnProperty(one)) {
                $this.swiperInfo.push(
                    {
                        id: TParticleList[one].id,
                        title: TParticleList[one].title,
                        imgSrc: newsService.getImgUrl(TParticleList[one].content),
                        content: TParticleList[one].content,
                        ctime: TParticleList[one].ctime,
                        publisher: TParticleList[one].publisher
                    }
                );
            }
        }
    },
    // 判断文章类型
    judgeArticleType (res, folderName, $this) {
        switch (folderName) {
        case '图片新闻' :
            $this.TParticleList = res.data.data.page.records;
            newsService.getSwiperInfo($this.TParticleList, $this);
            break;
        case '新闻动态':
            $this.XWDTarticleList = res.data.data.page.records;
            break;
        case '信息公告':
            $this.XXGGarticleList = res.data.data.page.records;
            break;
        case '政策快递':
            $this.ZCKDarticleList = res.data.data.page.records;
            break;
        default:
            break;
        }
    },
    /*  从文章的content中提取出第一张图片的src地址 */
    getImgUrl (str) {
        let data = '';
        str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/, function (match, capture) {
            data = capture;
        });
        return data;
    },
    /*  通过文章id获取文章 */
    queryArticleById (articleId, $this) {
        let urlStr = Config.URL_DEFAULT.article.queryArticleById;
        axios.get(urlStr, {
            id: articleId
        }).then(function (res) {
            $this.articleInfo = res.data;
        });
    }
};

export default newsService;
