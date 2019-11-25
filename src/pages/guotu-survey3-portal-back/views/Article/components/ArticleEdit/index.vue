<template>
    <el-card class="article-edit">
      <el-form ref="form" :rules="articleSubRules" label-width="82px" :model="formInfo" size="mini">
        <el-form-item size="mini" label="文章标题" prop="title">
          <el-input  size="mini" v-model="formInfo.title" placeholder="请输入文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章分类" prop="folderId">
          <el-cascader
            size="mini"
            v-model="formInfo.folderId"
            :change-on-select = "true"
            :options="folderTypeOptions"
            :props="props"
          >
          </el-cascader>
        </el-form-item>
        <el-form-item label="关键字" prop="keyWord">
          <el-input  size="mini" v-model="formInfo.keyWord" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="discription">
          <el-input  size="mini" v-model="formInfo.discription" placeholder="请输入描述"></el-input>
        </el-form-item>
        <el-form-item label="发布人" prop="publisher">
          <el-input  size="mini" v-model="formInfo.publisher" placeholder="请输入文章发布作者"></el-input>
        </el-form-item>
        <el-form-item label="文章内容" prop="content">
          <div class="quill-editor-example">
          <!-- quill-editor -->
          <quill-editor ref="myTextEditor"
                        v-model="formInfo.content"
                        :options="editorOption">
          </quill-editor>
          <div class="quill-code">
            <code class="hljs" v-html="contentCode"></code>
          </div>
        </div></el-form-item>
      </el-form>
          <el-col style="margin-bottom: 20px">
            <el-button @click.stop="submitClick" type="primary">提交</el-button>
          </el-col>
    </el-card>
</template>

<script>
// require styles
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { quillEditor } from 'vue-quill-editor';
import hljs from 'highlight.js';
import FolderService from '../../../../service/folder.service.js';

import ArticleEditService from '@guotu-survey3-portal-back/service/article-service/ArticleEditService.js';

export default {
    components: {quillEditor},
    data () {
        return {
            name: '01-example',
            content: '',
            editorOption: {
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{'header': 1}, {'header': 2}],
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        [{'script': 'sub'}, {'script': 'super'}],
                        [{'indent': '-1'}, {'indent': '+1'}],
                        [{'direction': 'rtl'}],
                        [{'size': ['small', false, 'large', 'huge']}],
                        [{'header': [1, 2, 3, 4, 5, 6, false]}],
                        [{'font': []}],
                        [{'color': []}, {'background': []}],
                        [{'align': []}],
                        ['clean'],
                        ['link', 'image', 'video']
                    ],
                    syntax: {
                        highlight: text => hljs.highlightAuto(text).value
                    }
                }
            },
            folderTypeOptions: [],
            props: {
                value: 'id',
                label: 'name',
                children: 'children'
            },
            formInfo: {
                title: '',
                folderId: [],
                keyWord: '',
                discription: '',
                publisher: '',
                content: ''
            },
            folderList: [],
            paginationTotal: 0,
            isFolderListReady: true,
            articleSubRules: {
                title: [
                    { required: true, message: '请输入文章标题', trigger: 'blur' }
                ],
                folderId: [
                    { required: true, message: '请选择文章类型', trigger: 'blur' }
                ],
                keyWord: [
                    { required: true, message: '请输入文章关键字', trigger: 'blur' }
                ],
                discription: [
                    { required: true, message: '请输入文章描述', trigger: 'blur' }
                ],
                publisher: [
                    { required: true, message: '请输入文章作者', trigger: 'blur' }
                ],
                content: [
                    { required: true, message: '请输入文章内容', trigger: 'blur' }
                ]

            }
        };
    },
    methods: {
        // 文章提交事件
        submitClick () {
            ArticleEditService.realeaseArticle(this);
            this.formInfo = {
                title: '',
                folderId: [],
                keyWord: '',
                discription: '',
                publisher: '',
                content: ''
            };
        },
        setParentFolderList (folderList) {
            this.folderTypeOptions = folderList;
        }
    },
    computed: {
        editor () {
            return this.$refs.myTextEditor.quill;
        },
        contentCode () {
            return hljs.highlightAuto(this.content).value;
        }
    },
    created () {
        FolderService.queryFatherFolder(this);
    }
};
</script>

<style lang="less" scoped>
  @deep:~">>>";
.article-edit {
      margin: 20px;
  .el-form{
    width: 70%;
    margin: 0 auto;
    @{deep}.ql-editor {
      height: 20rem;
      padding-bottom: 1rem;
    }
  }
  @{deep}.el-form-item__content{
        text-align: left;
      }
}
</style>
