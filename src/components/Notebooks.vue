<template>
 <div class="notebook-list">
    <div class="new-book">
      <a href="" @click.prevent.stop='onCreate'><i class="iconfont icon-plus"></i>新建笔记本</a>
    </div>
    <div class="book-list">
      <h3>笔记本列表<span>({{notebooks.length}})</span></h3>
      <ul>
        <router-link v-for= 'notebook in notebooks' :key="notebook.id" :to='`/note?notebookId=${notebook.id}`'>
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

</script>

<style lang='less' scoped>
    .notebook-list {
      margin-left: 55px;
      .iconfont {font-size: 12px; color:#B3C0C8;margin-right: 6px;}
      .new-book {
        height: 45px;
        border-bottom: 1px solid #ccc;
        line-height: 45px;
        a {
          background: #fff;
          font-size: 12px;
          padding: 5px;
          margin: 10px 0 0 23px;
        }
      }
      .book-list {
        width: 969px;
        margin: 22px auto;
        h3 {
          font-size: 12px;
          font-weight: 700;
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
            .count {color: #ccc;font-weight: 100;font-size: 12px;}
            .action,.time {
              float: right;
              font-size: 12px;
              color: #B3C0C8;
              font-weight: normal;
              margin-left: 5px;
              cursor: pointer;
              &:hover {color:#36bc6c}
            }
            }
        }
      }
    }

</style>
