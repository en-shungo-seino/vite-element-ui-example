<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header-content">
          <h1>Todo アプリ</h1>
          <p class="subtitle">シンプルで使いやすいタスク管理</p>
        </div>
      </el-header>
      <el-main>
        <div class="todo-container">
          <el-input
            v-model="newTodo"
            placeholder="新しいタスクを入力してください"
            @keyup.enter.native="addTodo"
            class="todo-input"
          >
            <el-button
              slot="append"
              icon="el-icon-plus"
              @click="addTodo"
            ></el-button>
          </el-input>

          <el-card class="todo-list" shadow="hover">
            <div slot="header" class="todo-header">
              <span>タスク一覧</span>
              <span class="todo-count">{{ todos.length }}件のタスク</span>
            </div>
            <div v-if="todos.length === 0" class="empty-state">
              <i class="el-icon-notebook-2"></i>
              <p>タスクがありません</p>
            </div>
            <div
              v-else
              v-for="(todo, index) in todos"
              :key="index"
              class="todo-item"
            >
              <el-checkbox
                v-model="todo.completed"
                @change="toggleTodo(index)"
                class="todo-checkbox"
              >
                <span :class="{ 'is-completed': todo.completed }">
                  {{ todo.text }}
                </span>
              </el-checkbox>
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                circle
                @click="removeTodo(index)"
                class="delete-button"
              ></el-button>
            </div>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.todos.push({
          text: this.newTodo,
          completed: false,
        });
        this.newTodo = "";
      }
    },
    toggleTodo(index) {
      this.todos[index].completed = !this.todos[index].completed;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
// グローバルリセット
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

// カラーパレット
$primary-color: #6366f1;
$primary-light: #818cf8;
$text-color: #1f2937;
$text-light: #6b7280;
$background-color: #f9fafb;
$card-background: #ffffff;
$border-color: #e5e7eb;
$success-color: #10b981;
$danger-color: #ef4444;

#app {
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  color: $text-color;
  background-color: $background-color;
  min-height: 100vh;
}

.el-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, $primary-color, $primary-light);
  color: white;
  padding: 3rem 1rem;

  .header-content {
    text-align: center;
    width: 100%;
    max-width: 800px;

    h1 {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.2;
    }

    .subtitle {
      margin: 0.75rem 0 0;
      font-size: 1rem;
      opacity: 0.9;
      line-height: 1.4;
    }
  }
}

.el-main {
  padding: 2rem 1rem;
}

.todo-container {
  max-width: 800px;
  margin: 0 auto;
}

.todo-input {
  margin-bottom: 1.5rem;

  .el-input__inner {
    border-radius: 8px;
    border: 2px solid $border-color;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    transition: all 0.2s;

    &:focus {
      border-color: $primary-color;
      box-shadow: 0 0 0 3px rgba($primary-color, 0.1);
    }
  }

  .el-button {
    border-radius: 0 8px 8px 0;
    padding: 0 1.5rem;
  }
}

.todo-list {
  border-radius: 12px;
  border: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  .todo-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    color: $text-color;

    .todo-count {
      font-size: 0.875rem;
      color: $text-light;
    }
  }
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid $border-color;
  transition: all 0.2s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba($primary-color, 0.02);
  }

  .todo-checkbox {
    flex: 1;
    margin-right: 1rem;

    .el-checkbox__label {
      font-size: 1rem;
      color: $text-color;
    }
  }

  .delete-button {
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover .delete-button {
    opacity: 1;
  }
}

.is-completed {
  text-decoration: line-through;
  color: $text-light;
}

.empty-state {
  text-align: center;
  padding: 3rem 0;
  color: $text-light;

  i {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
}

// Element UIのカスタマイズ
.el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: $primary-color;
  border-color: $primary-color;
}

.el-button--danger {
  background-color: $danger-color;
  border-color: $danger-color;

  &:hover {
    background-color: color.adjust($danger-color, $lightness: -10%);
    border-color: color.adjust($danger-color, $lightness: -10%);
  }
}
</style>
