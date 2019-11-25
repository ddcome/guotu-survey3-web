// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
        'es6': true,
        'node': true,
        'amd': true
    },
    extends: [
        'eslint:recommended',
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
        // 'import',
        // 'node',
        // 'promise',
        // 'standard',
        // 'html'
    ],
    globals: {
        'document': true,
        'navigator': true,
        'window': true,
        'console': true
    },
    rules: {
        'no-console': 'off', 	//不允许console
        'no-negated-in-lhs': 2, //不允许在in表达式语句中对最左边的运算数使用取反操作
        'no-empty': 2, //不允许出现空的代码块
        'no-extra-semi': 2, //不允许出现不必要的分号
        'no-eq-null': 2, //不允许对null用==或者!=
        'no-loop-func': 2, //不允许在循环语句中进行函数声明
        'no-param-reassign': 0, //不允许重新分配函数参数'no-proto': 2, //不允许使用__proto__属性
        'no-script-url': 2, //不允许使用javascript:void(0)
        'no-void': 2, //不允许void操作符
        'no-warning-comments': [1, {'terms': ['todo', 'fixme', 'any other term']}], //不允许警告备注
        'radix': 1, //使用parseInt时强制使用基数来指定是十进制还是其他进制
        'vars-on-top': 0, //var必须放在作用域顶部
        'wrap-iife': [2, 'any'], //立即执行表达式的括号风格
        'yoda': [2, 'never', {'exceptRange': true}], //不允许在if条件中使用yoda条件
        'strict': [2, 'function'], //使用严格模式
        'no-catch-shadow': 2, //不允许try catch语句接受的err变量与外部变量重名'no-delete-var': 2, //不允许使用delete操作符
        'no-label-var': 2, //不允许标签和变量同名
        // 'no-shadow': 2, //外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        'no-undef': 2, //不允许未声明的变量
        'no-undefined': 2, //不允许把undefined当做标识符使用
        'consistent-this': [0, 'self'], //当获取当前环境的this是用一样的风格
        'func-names': 0, //函数表达式必须有名字
        'func-style': 0, //函数风格，规定只能使用函数声明或者函数表达式
        'max-nested-callbacks': 0, //回调嵌套深度
        'newline-after-var': 0, //变量声明后必须空一行
        'no-lonely-if': 0, //不允许else语句内只有if语句
        'no-ternary': 0, //不允许使用三目运算符
        // 'no-underscore-dangle': 2, //不允许标识符以下划线开头
        'operator-assignment': 0, //赋值运算符的风格
        'quote-props': 0, //对象字面量中属性名加引号
        'sort-vars': 0, //变量声明时排序
        'no-var': 0, //使用let和const代替var
        //强制使用分号
        'semi': ['error', 'always'],
        //-------------------------------代码格式--------------------------------
        //4格空格缩进
        'indent': ['error', 4],
        //单行代码块两边加空格
        'block-spacing': ['error', 'always'],
        //关键字要与花括号在同一行
        'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
        //逗号后面加空格
        'comma-spacing': ['error', {'before': false, 'after': true}],
        //多行 if 语句的的括号不能省。
        'curly': ['error', 'multi-line'],
        //点号操作符须与属性需在同一行。
        'dot-location': ['error', 'property'],
        //文件末尾留一空行。
        'eol-last': 'error',
        //函数调用时标识符与括号间不留间隔
        'func-call-spacing': ['error', 'never'],
        //键值对当中冒号与值之间要留空白。
        'key-spacing': ['error', {'beforeColon': false, 'afterColon': true}],
        //关键字后面加空格。
        'keyword-spacing': ['error', {'before': true, 'after': true}],
        //不要混合使用空格与制表符作为缩进
        'no-mixed-spaces-and-tabs': 'error',
        //除了缩进，不要使用多个空格
        'no-multi-spaces': 'error',
        //不允许有连续多行空行
        'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0}],
        //行末不留空格
        'no-trailing-spaces': 'error',
        //属性前面不要加空格
        'no-whitespace-before-property': 'error',
        //对象属性换行时注意统一代码风格(要么都换行，要么都不换)
        'object-property-newline': ['error', {'allowMultiplePropertiesPerLine': true}],
        //对于三元运算符 ? 和 : 与他们所负责的代码处于同一行
        'operator-linebreak': ['error', 'after', {'overrides': {'?': 'before', ':': 'before'}}],
        //代码块中避免多余留白。
        'padded-blocks': ['error', {'blocks': 'never', 'switches': 'never', 'classes': 'never'}],
        //展开运算符与它的表达式间不要留空白
        'rest-spread-spacing': ['error', 'never'],
        //遇到分号时空格要后留前不留
        'semi-spacing': ['error', {'before': false, 'after': true}],
        //代码块首尾留空格
        'space-before-blocks': ['error', 'always'],
        //函数声明时括号与函数名间加空格
        'space-before-function-paren': ['error', 'always'],
        //圆括号间不留空格
        'space-in-parens': ['error', 'never'],
        //字符串拼接操作符 (Infix operators) 之间要留空格
        'space-infix-ops': 'error',
        //一元运算符后面跟一个空格
        'space-unary-ops': ['error', {'words': true, 'nonwords': false}],
        //模板字符串中变量前后不加空格
        'template-curly-spacing': ['error', 'never'],
        //yield * 中的 * 前后都要有空格
        'yield-star-spacing': ['error', 'both'],
        //生成器函数*的前后空格
        'generator-star-spacing': ['error', {'before': true, 'after': true}],
        //-------------------------------可能出现错误------------------------
        //get和set成对出现
        'accessor-pairs': 'error',
        //不允许多余的行末逗号
        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],
        //始终将逗号置于行末
        'comma-style': ['error', 'last'],
        //子类构造函数中必须调用super，非子类不要调用super
        'constructor-super': 'error',
        //始终使用 === 替代 ==，null除外
        'eqeqeq': ['error', 'always', {'null': 'ignore'}],
        //函数里面的异常信息不要忘记处理
        'handle-callback-err': ['error', '^(err|error)$'],
        //无参的构造函数调用时要带上括号
        'new-parens': 'error',
        //使用数组字面量而不是构造器(由于参数的二义性)，但是我们可以在初始化一个固定大小数组时用到他
        'no-array-constructor': 'error',
        //避免对类名重新赋值
        'no-class-assign': 'error',
        //避免修改使用 const 声明的变量
        'no-const-assign': 'error',
        //避免使用常量作为条件表达式的条件（循环语句除外）
        'no-constant-condition': ['error', {'checkLoops': false}],
        //不要对变量使用 delete 操作
        'no-delete-var': 'error',
        //不要定义重复的函数参数
        'no-dupe-args': 'error',
        //类中不要定义重复的属性
        'no-dupe-class-members': 'error',
        //对象字面量中不要定义重复的属性
        'no-dupe-keys': 'error',
        //switch 语句中不要定义重复的 case 分支
        'no-duplicate-case': 'error',
        //正则中不要使用空字符
        'no-empty-character-class': 'error',
        //不要解构空值
        'no-empty-pattern': 'error',
        //catch 中不要对错误重新赋值
        'no-ex-assign': 'error',
        //switch 一定要使用 break 来将条件分支正常中断
        'no-fallthrough': 'error',
        //避免对声明过的函数重新赋值
        'no-func-assign': 'error',
        //不要对全局只读对象重新赋值
        'no-global-assign': 'error',
        //不要向 RegExp 构造器传入非法的正则表达式
        'no-invalid-regexp': 'error',
        //禁止使用 __iterator__
        'no-iterator': 'error',
        //避免将变量赋值给自己
        'no-self-assign': 'error',
        //避免将变量与自己进行比较操作
        'no-self-compare': 'error',
        //不要随意更改关键字的值
        'no-shadow-restricted-names': 'error',
        //禁止使用稀疏数组（Sparse arrays）
        'no-sparse-arrays': 'error',
        //正确使用 ES6 中的字符串模板
        'no-template-curly-in-string': 'error',
        //用 throw 抛错时，抛出 Error 对象而不是字符串
        'no-throw-literal': 'error',
        //不要使用 (, [, or ` 等作为一行的开始。在没有分号的情况下代码压缩后会导致报错，而坚持这一规范则可避免出错。
        'no-unexpected-multiline': 'error',
        //循环语句中注意更新循环变量
        'no-unmodified-loop-condition': 'error',
        //return，throw，continue 和 break 后不要再跟代码
        'no-unreachable': 'error',
        //finally 代码块中不要再改变程序执行流程
        'no-unsafe-finally': 'error',
        //用合法的字符串跟 typeof 进行比较操作
        'valid-typeof': ['error', {'requireStringLiterals': true}],
        //禁止在正则表达式中使用控制字符
        'no-control-regex': 'error',
        //禁止无用的表达式
        'no-unused-expressions': ['error', {
            'allowShortCircuit': true,
            'allowTernary': true,
            'allowTaggedTemplates': true
        }],
        //未定义前不能使用
        'no-use-before-define': ['error', {'functions': false, 'classes': false, 'variables': false}],
        //-------------------------------命名--------------------------------
        //构造函数要以大写字母开头。
        'new-cap': ['error', {'newIsCap': true, 'capIsNew': false}],
        //变量和函数使用驼峰命名法
        'camelcase': ['error', {'properties': 'never'}],

        //-------------------------------最佳实践----------------------------
        //避免使用 arguments.callee 和 arguments.caller。
        //不利于代码优化，且高级版本的ES标准会废弃它
        'no-caller': 'error',
        //条件语句中赋值语句使用括号包起来
        'no-cond-assign': 'error',
        //不要使用 debugger
        'no-debugger': 'error',
        //不要使用 eval()
        'no-eval': 'error',
        //不要扩展原生对象
        'no-extend-native': 'error',
        //避免多余的函数上下文绑定
        'no-extra-bind': 'error',
        //避免不必要的布尔转换
        'no-extra-boolean-cast': 'error',
        //不要使用多余的括号包裹函数
        'no-extra-parens': ['error', 'functions'],
        //不要省去小数点前面的0（增强可读性）
        'no-floating-decimal': 'error',
        //注意隐式的 eval()
        'no-implied-eval': 'error',
        //嵌套的代码块中禁止再定义函数
        'no-inner-declarations': ['error', 'functions'],
        //不要使用非法的空白符
        'no-irregular-whitespace': 'error',
        //不要使用标签语句
        'no-labels': ['error', {'allowLoop': false, 'allowSwitch': false}],
        //不要书写不必要的嵌套代码块
        'no-lone-blocks': 'error',
        //不要使用多行字符串
        'no-multi-str': 'error',
        //new 创建对象实例后需要赋值给变量
        'no-new': 'error',
        //禁止使用 Function 构造器
        'no-new-func': 'error',
        //禁止使用 Object 构造器，直接声明对象即可
        'no-new-object': 'error',
        //禁止使用 new require
        'no-new-require': 'error',
        //禁止使用 Symbol 构造器
        'no-new-symbol': 'error',
        //禁止使用原始包装器
        'no-new-wrappers': 'error',
        //不要将全局对象的属性作为函数调用
        'no-obj-calls': 'error',
        //不要使用八进制字面量
        'no-octal': 'error',
        //字符串字面量中也不要使用八进制转义字符
        'no-octal-escape': 'error',
        //使用 getPrototypeOf 来替代 __proto__
        'no-proto': 'error',
        //不要重复声明变量
        'no-redeclare': 'error',
        //正则中避免使用多个空格
        'no-regex-spaces': 'error',
        //return 语句中的赋值必需有括号包裹
        'no-return-assign': ['error', 'except-parens'],
        //避免使用逗号操作符
        'no-sequences': 'error',
        //不要使用 undefined 来初始化变量
        'no-undef-init': 'error',
        //如果有更好的实现，尽量不要使用三元表达式
        'no-unneeded-ternary': ['error', {'defaultAssignment': false}],
        //关系运算符的左值不要做取反操作
        'no-unsafe-negation': 'error',
        //不要定义未使用的变量
        'no-unused-vars': ['error', {'vars': 'all', 'args': 'none', 'ignoreRestSiblings': true}],
        //避免不必要的 .call() 和 .apply()
        'no-useless-call': 'error',
        //避免使用不必要的计算值作对象属性。
        'no-useless-computed-key': 'error',
        //禁止多余的构造器(ES2015会自动生成一个简单构造器)
        'no-useless-constructor': 'error',
        //禁止不必要的转义
        'no-useless-escape': 'off',
        //import, export 和解构操作中，禁止赋值到同名变量。
        'no-useless-rename': 'error',
        //禁止使用 with
        'no-with': 'error',
        //每个 var 关键字单独声明一个变量
        'one-var': ['error', {'initialized': 'never'}],
        //除需要转义的情况外，字符串统一使用单引号
        'quotes': ['error', 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}]
    }
};
