<template>
 <div class='note-sidebar'>
   <span class='btn add-note' @click='onAddNote'>+ 添加笔记</span>
   <div class="dropdown">
      <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        {{curBook.title}}<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="notebook.id" v-for="notebook in notebooks" :key='notebook.id'>{{notebook.title}}</el-dropdown-item>
      </el-dropdown-menu>
      </el-dropdown>
   </div>
   <div class="menu">
			<div>更新时间</div>
			<div>标题</div>
		</div>
    <ul class="notes">
			<li v-for="note in notes" :key='note.id'>
				<router-link :to="`/notes?noteId=${note.id}&notebookId=${curBook.id}`">
					<span class="data">{{note.friendlyTime}}</span>
					<span class="title">{{note.title}}</span>
				</router-link>
			</li>
		</ul>

 </div>

</template>

<script>
import {mapGetters,mapActions, mapMutations} from 'vuex';


 export default {
   data () {
     return {
     }
   },
   computed: {
     ...mapGetters([
       'notes',
       'notebooks',
       'curBook',
       'curNote'
       ])
   },
    created(){
      // 获取笔记本列表
     this.getNotebooks().then(()=>{
      //  获取当前笔记本
       this.setCurBookId({notebookId:this.$route.query.notebookId})
      //  获取所有笔记
         if(this.curBook && this.curBook.id)  return this.getNotes(
           {notebookId:this.curBook.id})}
         ).then(()=>{
          //  获取当前笔记
           this.setCurNoteId({curnoteId:this.$route.query.noteId});
           this.$router.replace({
             path: '/notes',
             query: {
               noteId:this.curNote.id,
               notebookId: this.curBook.id
             }
           })
     })
   },
   methods: {
    ...mapMutations([
       'setCurNoteId',
       'setCurBookId'
     ]),
     ...mapActions([
       'getNotebooks',
       'getNotes',
       'addNote'
     ]),

     handleCommand(notebookId) {
       this.setCurBookId({notebookId});
       this.getNotes({notebookId:this.curBook.id}).then(()=>{
         this.setCurNoteId({noteId:this.$route.query.noteId})
       })
      },
      onAddNote(){
        this.addNote({notebookId:this.curBook.id}).then((res)=>{
          this.setCurNoteId({noteId:res.id})
        })
      }
   },

   components: {

   }
 }


</script>

<style lang='less' scoped>
.el-dropdown-menu {
  padding: 5px 0;
  margin-top: -8px;
}
.el-dropdown-menu__item {
      height: 30px;
      line-height: 30px;
    }
.note-sidebar {
  width: 290px;
  height: 100%;
  border-right: 1px solid #ccc;
  .add-note {
    position: absolute;
    left: 260px;
    top: 12px;
    background: #fff;
    z-index: 10;
    border: 1px solid #ccc;
    border-radius: 3px;
    cursor: pointer;
    padding: 3px;
  }
  .dropdown {
    background: #f7f7f7;
    text-align: center;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #ccc;
  }
  .menu {
    display: flex;
  }
  .menu div{
    flex: 1;
    float: left;
    padding: 5px;
    text-align: center;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
  }
  .notes li{
    display: flex;
    &:nth-child(even) {background: rgba(0, 0, 0, 0.171)}
    .router-link-exact-active {border: 2px solid #81c0f3}
    a {
      flex: 1;
      height: 30px;
      line-height: 30px;
      text-align: center;
      &:hover {color: #1A9DFF}
      &.active {background: #000;}
      span {
        display: inline-block;
        width: 140px;
      }
    }
  }


}

</style>
