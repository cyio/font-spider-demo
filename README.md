由于字姝的一些限制，如不支持 CSS 预处理，故建立此项目单独处理字体。

## 步骤
1. clone 本项目`git clone https://github.com/cyio/font-spider-demo.git`
2. 安装依赖`npm install`，或全局安装 font-spider `npm install font-spider -g`
3. 将`ttf`字体文件放入`font`文件夹
4. 把目标文字写入 html 文件中
5. 运行命令`npx font-spider *.html`
6. 在本机或局域网中查看效果`npx serve ./`

### 注意
> @font-face 中的 src 定义的 .ttf 文件必须存在，其余的格式将由工具自动生成
> 开发阶段请使用相对路径的 CSS 与 WebFont
> 字体文件名不重要，随意，但字体名是定的，可能需要具体去查看
 
说明：Web字体会生成到`font`文件夹下，原`ttf`会备份到`.font-spider`文件下

#### 参考：
[字蛛的使用](http://font-spider.org/#use)
[自定义字体与字蛛使用方法及坑点 - 简书](https://www.jianshu.com/p/ef1280ebe91a)
