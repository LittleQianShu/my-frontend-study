/**
 * 🎓 外部 JS 文件示例
 *
 * 这个文件展示了为什么需要把 JS 代码单独写在一个文件里
 */

console.log('📚 我是从外部 myscript-demo.js 文件加载的！');
console.log('👋 你能在控制台看到我，说明外部 JS 导入成功了！');

// ============================================
// 示例 1：定义可复用的函数
// ============================================
function sayHello(name) {
    console.log(`👋 你好，${name}！`);
    return `欢迎，${name}！`;
}

function calculateSum(a, b) {
    const result = a + b;
    console.log(`🧮 ${a} + ${b} = ${result}`);
    return result;
}

// ============================================
// 示例 2：数据处理
// ============================================
const students = [
    { name: '千树', score: 95 },
    { name: '小明', score: 87 },
    { name: '小红', score: 92 }
];

function findTopStudent(students) {
    const top = students.reduce((prev, current) => {
        return (prev.score > current.score) ? prev : current;
    });
    console.log('🏆 最高分学生：', top.name, top.score);
    return top;
}

// ============================================
// 示例 3：工具函数
// ============================================
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formatted = `${year}-${month}-${day}`;
    console.log('📅 格式化日期：', formatted);
    return formatted;
}

function isEmailValid(email) {
    const isValid = email.includes('@') && email.includes('.');
    console.log('📧 邮箱验证：', email, isValid ? '✅ 有效' : '❌ 无效');
    return isValid;
}

// ============================================
// 示例 4：数据验证
// ============================================
function validateAge(age) {
    if (age < 0) {
        console.log('⚠️ 年龄不能为负数！');
        return false;
    }
    if (age > 150) {
        console.log('⚠️ 年龄似乎不太对...');
        return false;
    }
    console.log('✅ 年龄验证通过：', age);
    return true;
}

// ============================================
// 示例 5：模拟 API 请求
// ============================================
function fetchData() {
    console.log('🌐 正在请求数据...');
    // 模拟异步请求
    setTimeout(() => {
        const data = { id: 1, name: '示例数据', status: '成功' };
        console.log('📦 数据接收成功：', data);
    }, 1000);
}

// ============================================
// 示例 6：调试日志
// ============================================
function debugFunction(x) {
    console.log('🐛 调试信息：函数被调用了');
    console.log('🐛 参数 x 的值：', x);
    console.log('🐛 参数 x 的类型：', typeof x);

    const result = x * 2;
    console.log('🐛 计算结果：', result);
    return result;
}

// ============================================
// 文件加载完成提示
// ============================================
console.log('✅ myscript-demo.js 加载完成！');
console.log('💡 你可以在 HTML 中调用这些函数：');
console.log('   - sayHello("千树")');
console.log('   - calculateSum(10, 20)');
console.log('   - findTopStudent(students)');
console.log('   - formatDate(new Date())');
console.log('   - isEmailValid("test@example.com")');
console.log('   - validateAge(25)');
console.log('   - fetchData()');
console.log('   - debugFunction(5)');
