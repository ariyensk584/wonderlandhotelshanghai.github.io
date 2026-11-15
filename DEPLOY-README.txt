深坑奇境网站包 — 部署说明

本包为纯静态网站：HTML 页面内嵌 CSS、少量原生 JavaScript，原创插画在页面中以内嵌图片呈现；动态信息图 MP4 在 media/。无需 Node.js 或构建工具。

文件：
- index.html：中文首页，含 3 列专题卡片与侧栏
- hotel-overview.html / architecture.html / underwater-spaces.html / construction.html / landscape.html：5 篇专题
- about.html / contact.html / privacy.html / 404.html：说明页面
- assets/images/：原创 PNG 示意插画（网站内联展示版本也已嵌入 HTML）
- media/：原创无旁白动态信息图，首页约 65 秒，专题页各约 28 秒
- sitemap.xml / robots.txt：基础 SEO 文件

GitHub Pages 部署：
1. 解压，把整个文件夹内的文件上传到仓库根目录（不是把 ZIP 本身上传）。
2. 仓库 Settings → Pages，选择要发布的 branch 和 root folder。
3. 等 GitHub Pages 发布完成后，用 HTTPS 打开首页检查导航、图片和 MP4。

自定义域名（稍后做）：
预期域名按您给出的邮箱推定为 wonderlandhotelshanghai.mkm.fan。确认最终域名后，在仓库 Pages 设置里添加它，并按 GitHub Pages 当前提示在域名 DNS 中配置记录；再在仓库根目录新增名为 CNAME 的纯文本文件，内容仅写：wonderlandhotelshanghai.mkm.fan
同时把所有 HTML、sitemap.xml、robots.txt 中的 https://wonderlandhotelshanghai.github.io 改为 https://wonderlandhotelshanghai.mkm.fan。在 DNS 生效并启用 HTTPS 后再做这一步，避免 canonical 指向尚未生效的域名。

联系邮箱：contact@wonderlandhotelshanghai.mkm.fan
注意：本包只在页面上显示该地址；邮箱是否能收信，取决于您是否另行配置该域名的邮件服务/MX记录。

资料与真实性：文章引用 IHG、WSP、JADE+QA 的公开项目页面，链接在各文末。插画/视频均为原创示意图，不是酒店实景或施工图。当前页面没有启用广告或分析代码；若将来接入广告，需要先补充相应隐私/同意设置并再次检查政策。
