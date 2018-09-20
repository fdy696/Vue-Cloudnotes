<template>
 <div class="notebook-list">
    <div class="new-book">
      <a href="" @click.prevent.stop='onCreate'>新建笔记本 </i></a>
    </div>
    <div class="book-list">
      <h3>笔记本列表<span>({{notebooks.length}})</span></h3>
      <ul>
        <router-link v-for= 'notebook in notebooks' :key="notebook.id" :to='`/notes?notebookId=${notebook.id}`'>
          <li>
            <i class='iconfont icon-notebook'></i>
            <span>{{notebook.title}}</span>
            <span class='count'>{{notebook.noteCounts}}</span>
            <span class='action' @click.stop.prevent='onEdit(notebook)'>编辑</span>
            <span class='action' @click.stop.prevent='onDelete(notebook)'>删除</span>
            <span class='time'>{{notebook.friendlyTime}}</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
 export default {
   data () {
     return {
     }
   },
   computed: {
     ...mapGetters(['notebooks']),
   },

   methods: {
     ...mapActions([
     'getNotebooks',
     'addNotebook',
     'deleteNotebook',
     'updateNotebook',
     'checkoutLogin']),
     onCreate(){
       this.$prompt('请输入标题', '新建笔记本', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^.{1,30}$/,
          inputErrorMessage: '标题不能为空'
        }).then(({value }) => {
          this.$message({
            type: 'success',
            message: '创建笔记本成功 ' + value
          });
          this.addNotebook({title:value})
        })
     },
     onDelete(notebook){
       this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.deleteNotebook({notebookId:notebook.id});
        })
     },
     onEdit(notebook){
       this.$prompt('请输入新的笔记本标题', '修改笔记本标题', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /^.{1,30}$/,
          inputErrorMessage: '标题不能为空'
        }).then(({ value }) =>{
          this.updateNotebook({notebookId:notebook.id,title:value})
          this.$message({
            type: 'success',
            message: '修改成功'
          });
        })
     }
   },
   created(){
     this.checkoutLogin({path:'/notebooks'}).then(()=>{
       this.getNotebooks();
     })

   },
   components: {

   }
 }
</script>

<style lang='less' scoped>
    .notebook-list {
      margin-left: 120px;
      .iconfont {font-size: 12px; color:#B3C0C8;margin-right: 6px;}
      .new-book {
        height: 50px;
        border-bottom: 1px solid #ccc;
        line-height: 50px;
        a {
          background: #66B2FF;
          color: #fff;
          font-size: 16px;
          padding: 10px;
          margin: 10px 0 0 30px;
          border-radius: 2px;
        }
      }
      .book-list {
        width: 969px;
        margin: 22px auto;
        h3 {
          font-size: 15px;
          height: 32px;
          line-height: 32px;
          padding-left: 10px;
        }
        ul {
          background: #fff;
          border-radius: 3px;
          box-shadow: 3px 1px 3px #ccc;
          li {
            padding: 0 15px 0 12px;
            height: 40px;
            border-bottom: 1px solid #ccc;
            line-height: 40px;
            font-weight: 700;
            color: rgba(44, 51, 60);
            i {font-size: 15px;color: #66B2FF}
            .count {color: #ccc;font-weight: 100;font-size: 12px;}
            .action,.time {
              float: right;
              font-size: 12px;
              color: #B3C0C8;
              font-weight: normal;
              margin-left: 5px;
              cursor: pointer;
              &:hover {color:#66B2FF}
            }
            }
        }
      }
    }

</style>
