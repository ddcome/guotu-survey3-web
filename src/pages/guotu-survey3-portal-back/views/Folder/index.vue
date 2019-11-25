<template>
    <el-card class="folder">
        <el-row>
            <el-col :span="10">
                <span class="folder-title">所有目录数据</span>
            </el-col>
            <el-col :span="4" :offset="10">
                <el-button type="primary" size="mini" class="new-btn" @click="newDialogVisible = true">新增</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <hr>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-table class="fonder-list-table" size="mini" v-loading="isFolderListReady" :data="folderList"
                          :default-sort="{prop: 'ctime', order: 'descending'}"
                          row-key="id">
                    <el-table-column
                            align="center"
                            prop="name"
                            label="目录名称"
                            :formatter="$utils.ElTableUtil.columnFormatter"
                    ></el-table-column>
                    <el-table-column
                            align="center"
                            prop="ename"
                            label="英文名称"
                            :formatter="$utils.ElTableUtil.columnFormatter"
                    ></el-table-column>
                    <el-table-column
                            align="center"
                            prop="pid"
                            label="父级目录名称"
                            show-overflow-tooltip
                            :formatter="$utils.ElTableUtil.columnFormatter"
                    ></el-table-column>
                    <el-table-column
                            align="center"
                            prop="ctime"
                            sortable
                            label="创建时间"
                            :formatter="$utils.ElTableUtil.columnFormatter"
                    ></el-table-column>
                    <el-table-column align="center" label="操作">
                        <template slot-scope="scope">
                            <i class="el-icon-edit action-btn" @click="editClick(scope)"></i>
                            <i class="el-icon-delete action-btn" @click="deleteClick(scope)"></i>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <!--分页组件-->
                <BackPagination
                        :total="paginationTotal"
                        :everyPageInputDisabled="true"
                        @pageNumberClickEmitter="pageNumberClick"
                ></BackPagination>
            </el-col>
        </el-row>
        <!--新增目录表单 dialog -->
        <el-dialog class="new-dialog" title="新增目录" width="500px" :visible.sync="newDialogVisible">
            <el-form :model="form" size="mini">
                <el-form-item label="父级目录" :label-width="formLabelWidth">
                    <el-select v-model="form.parent" placeholder="父级目录">
                        <el-option label="无" :value="null"></el-option>
                        <el-option :label="item.name" :value="item.id" v-for="item in parentFolderList" :key="item.id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="目录名" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="目录英文名" :label-width="formLabelWidth">
                    <el-input v-model="form.nameEn" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="newDialogVisible = false" size="mini">取 消</el-button>
                <el-button type="primary" @click="newClick" size="mini">确 定</el-button>
            </div>
        </el-dialog>
    </el-card>
</template>

<script>
import FolderService from '../../service/folder.service.js';
import BackPagination from './../common/back-pagination/index';

export default {
    components: {BackPagination},
    data () {
        return {
            formLabelWidth: '120px',
            newDialogVisible: false,
            addFonderParam: {
                pid: '', // 父级不需要传该值
                ename: '',
                name: ''
            },
            form: {
                name: '',
                parent: '',
                nameEn: ''
            },
            folderList: [],
            parentFolderList: [],
            paginationTotal: 0,
            isFolderListReady: true
        };
    },
    methods: {
        pageNumberClick (pageNum) {
            FolderService.queryAllFolder({current: pageNum, size: 10}, this);
        },
        newClick () {
            const $this = this;
            console.log('form', this.form);
            FolderService.insertOneFolder({
                pid: $this.form.parent,
                ename: $this.form.nameEn,
                name: $this.form.name,
                sort: 1,
                status: 1,
                checked: 1,
                width: 0,
                height: 0
            }, this);
            this.newDialogVisible = false;
        },
        deleteClick (scope) {
            const $this = this;
            console.log('scope > ', scope.row.id);
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                FolderService.deleteSomeByIds({
                    ids: scope.row.id
                }, $this);
            }).catch(() => {
            });
        },
        editClick (scope) {
            console.log('scope > ', scope);
        },
        initFatherFolderList () {
            FolderService.queryFatherFolder(this);
        },
        setParentFolderList (val) {
            this.parentFolderList = val;
        }
    },
    mounted () {
        FolderService.queryAllFolder({
            current: 1,
            size: 10
        }, this);
        this.initFatherFolderList();
    }
};
</script>

<style lang="less" scoped>
    .folder {
        margin: 20px 10px;
        .el-row {
            margin-bottom: 10px;
            .el-col {
                .folder-title {
                    float: left;
                    height: 28px;
                    line-height: 28px;
                }
                .new-btn {
                    float: right;
                }
                .fonder-list-table {
                    .cell {
                        .action-btn {
                            margin: 0 5px;
                            cursor: pointer;
                            font-size: 15px;
                        }
                        .action-btn:hover {
                            color: #409EFF;
                        }
                    }
                }
            }
        }
        .new-dialog {
            .el-form {
                .el-form-item {
                    .el-select {
                        width: 100%;
                    }
                }
            }
        }
    }
</style>
