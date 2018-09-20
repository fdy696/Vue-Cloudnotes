<template>
 <div class='trash'>
   <div class="trash-sidebar">
     <div class="trash-title">回收站</div>
     <ul class="trash-note-list">
       <li class="updata-title">
         <h5>更新时间</h5>
         <h5>标题</h5>
       </li>
       <li class="trash-note" v-for='trashnote in trashNotes' :key='trashnote.id'>
         <router-link :to="`/trash?noteId=${trashnote.id}`">
           <span class='fl'>{{trashnote.createdFriendlyTime}}</span>
           <span class='fr'>{{trashnote.title}}</span>
         </router-link>
       </li>
     </ul>
   </div>
   <div class="trash-detail">
     <div class="trash-detail-title">
       <span class="createdTime">创建日期:{{curTrashNote.createdFriendlyTime}}</span>
       <span class="updateTime">更新日期:{{curTrashNote.updateFriendlyTime}}</span>
       <span class='belong'>{{curTrashNote.belongNotebook}}</span>
       <button @click='onRevert'>恢复</button>
       <button @click='onDelete'>彻底删除</button>
     </div>
     <div class="content">
       <h3 class="note-title">{{curTrashNote.title}}</h3>
       <div class="note-content">{{curTrashNote.content}}</div>
     </div>
   </div>
 </div>
</template>

<script>
import Trash from '@/apis/trash'

window.trash = Trash;
import {mapStates,mapGetters,mapActions, mapMutations} from 'vuex';

 export default {
   data () {
     return {
    //    curTrashnote: {
    //        title:'追女神的方法',
    //        content: '追到我的女神 我用了三个办法 办法一 坚持 办法二 不要脸 办法三 坚持不要脸 她带我回家 她爸爸很无礼地跟我说 我养了我女儿二十年 我凭什么把她嫁给你 我回答 你养她二十年 我要养她四十年 还要照顾你三十年 你凭什么不把她嫁给我',
    //        id:'1xxxfhgc',
    //        createdTime: '2天前',
    //        updateTime:'三天前',
    //        belongNotebook: '我的笔记本1',

    //      },
    //    trashnotes: [
    //      {
    //        title:'trashnote1',
    //        content: 'dsadasda',
    //        id:'1xxxfhgc',
    //        createdTime: '2天前',
    //        updateTime:'三天前',
    //        belongNotebook: '我的笔记本1',
    //      }, {
    //        title:'trashnote2',
    //        id:'2bkjbknbn',
    //        createdTime: '6天前',
    //        updateTime:'1天前',
    //        belongNotebook: '我的笔记本1',
    //      }, {
    //        title:'trashnote3',
    //        id:'1bkbnbnmbn',
    //        createdTime: '10天前',
    //        updateTime:'三天前',
    //        belongNotebook: '我的笔记本1',
    //      }
    //    ]
        }
   },
  created(){
    this.checkoutLogin();
    this.getTrashNotes().then(()=>{
      this.setTrashNoteId({noteId:this.$route.query.noteId})
    })
   },
  beforeRouteUpdate(to,from,next){
    if(to.query.noteId){
      this.setTrashNoteId({noteId:to.query.noteId})
    }
     next();
   },
  computed: {
    ...mapGetters([
      'trashNotes',
      'curTrashNote'
    ])
  },
  methods: {
    ...mapMutations([
      'setTrashNoteId'
    ]),
    ...mapActions([
      'checkoutLogin',
      'getTrashNotes',
      'deleteTrashNote',
      'revertTrashNote'
      ]),
    onDelete(){
      this.deleteTrashNote({noteId:this.curTrashNote.id})
    },
    onRevert({noteId}){
      this.revertTrashNote({noteId:this.curTrashNote.id})
    }
  },
   components: {

   }
 }
</script>

<style lang='less' scoped>
  .trash {
    display: flex;
    min-height: 100%;
    margin-left: 54px;
    background: #fff;
    .trash-sidebar {
      width: 290px;
      position: absolute;
      top: 0;
      bottom: 0;
      background: #eee;
      border-right: 1px solid #ccc;
      .trash-title {
        flex:1;
        color: #4A4A4A;
        background: #F7F7F7;
        height:45px;
        font-size: 18px;
        line-height: 45px;
        text-align: center;
        border-bottom: 1px solid #eee;
      }
      .updata-title {
        height: 30px;
        h5 {
        width: 144px;
        float:left;
        text-align: center;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        }
      }
      .trash-note {
        width: 290px;
        height: 30px;
        border-bottom: 1px dashed #f6f6f6;
        span {
          display: inline-block;
          text-align: center;
          width: 142px;
          height: 28px;
          line-height: 28px;
        }
      }
    }
    .trash-detail {
       width: 100%;
      .trash-detail-title {
        user-select: none;
        margin-left: 290px;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        padding-right: 50px;
        color: #ccc;
        span {margin-right: 20px}
        button {
          background: #fff;
          border:1px solid #eee;
          margin-top: 4px;
          margin-right: 30px;
          padding: 0 5px;
          cursor: pointer;
          color: #E56149;
          float: right}
      }
      div.content {
        margin-left: 290px;
        padding: 30px;
        text-indent: 2em;
        font-size: 14px;
        line-height: 25px;
        margin-right: 150px;

        h3 {
          text-align: center;
          font-weight: 500;
          font-size: 22px;
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }

</style>
