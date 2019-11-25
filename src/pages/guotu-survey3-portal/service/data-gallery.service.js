import axios from './../axios/index';
import Config from './../config/index';
import {catalogData} from './data/catalog.data.js';
// import {Token} from './common/token.js';

const DataGalleryService = {
    queryCatalogData ($this) {
        $this.catalogData = catalogData;
    },
    queryCatalogCardList (num, start, $this) {
        const $self = this;
        // 为了上线服务的代码... 后续是要放开的！！！
        // Token.refreshToken().then(function () {
        let param = {
            num: num,
            start: start,
            sortField: 'modified',
            sortOrder: 'desc',
            q: $this.search + ' ' + 'owner:arcgis orgid:0123456789ABCDEF (type:("Map Service") -typekeywords:("Tiled" OR "Hosted") -type:("Web Map" OR "Web Mapping Application" OR "Shapefile"))  ownerfolder:root -type:("Code Attachment" OR "Featured Items") -typekeywords:("MapAreaPackage") -type:("Map Area")',
            f: 'json',
            token: Config.URL_DEFAULT.gisConfig.queryToken
        };
        axios.get(Config.URL_DEFAULT.gisServer.search, param).then(function (res) {
            $this.galleryCardList = $self.makeDataCompleted(res.data.results);
            $this.paginationTotal = res.data.total + 1;
        });
        // });
    },
    makeDataCompleted (data) {
        for (let index in data) {
            data[index]['imgUrl'] = this.getImgUrl(data[index].id);
        }
        return data;
    },
    getImgUrl (id) {
        return Config.URL_DEFAULT.gisServer.imgUrl(id, Config.URL_DEFAULT.gisConfig.queryToken);
    }
};
export default DataGalleryService;
