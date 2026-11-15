深坑奇境网站包 — 部署与媒体说明

本包为简体中文静态网站：页面内嵌 CSS 与少量原生 JavaScript，图片在 assets/images/，视频和字幕在 media/。无需 Node.js 或构建工具。

主要文件：
- index.html：长篇首页；主内容在前，专题卡片网格在 FAQ 前；含多镜头讲解视频。
- hotel-overview.html / architecture.html / underwater-spaces.html / construction.html / landscape.html：5 篇专题，均有多镜头旁白短片、字幕与配图。
- about.html / contact.html / privacy.html / 404.html：说明页面。
- assets/images/：中文品牌字标、favicon、项目画面和带署名的采石场照片。
- media/：6 个带音轨的 MP4、简体中文字幕 VTT 与旁白源音频。
- assets/js/ads.js、ads.txt：AdSense Auto ads 加载器与卖家记录；没有固定空广告框。
- CNAME：GitHub Pages 自定义域名配置。
- sitemap.xml / robots.txt：指向 wonderlandhotelshanghai.mkm.fan 的基础 SEO 文件。

GitHub Pages 发布：
GitHub 用户名是 ariyensk584，仓库名为 wonderlandhotelshanghai.github.io；未配置自定义域名时，默认项目地址是 https://ariyensk584.github.io/wonderlandhotelshanghai.github.io/ 。不要把 wonderlandhotelshanghai.github.io 当成账号域名，它会 404。
1. 解压 ZIP，把 wonderland-hotel-shanghai 文件夹内的文件上传到仓库根目录；不要把 ZIP 本身上传。
2. Repo → Settings → Pages，选择发布 branch 与 root folder。
3. Settings → Pages → Custom domain 填 wonderlandhotelshanghai.mkm.fan 并保存；仓库根目录应保留 CNAME 文件。
4. Cloudflare 的 mkm.fan zone 里添加/编辑：Type CNAME；Name wonderlandhotelshanghai（不要写 www.）；Target ariyensk584.github.io；Proxy DNS only（灰云）；TTL Auto。删除该主机名上冲突的 A/AAAA/其他 CNAME 记录。
5. 域名 DNS 生效且 GitHub 签发证书后再启用 Enforce HTTPS。检查 https://wonderlandhotelshanghai.mkm.fan/ 与 https://wonderlandhotelshanghai.mkm.fan/ads.txt 。如果仍显示 Hostingo 停放页，检查该子域名是否仍绑定到 Hostingo 或 CNAME 是否写成了 www 子域名。

内容与媒体：
- 首页视频约 76 秒，包含多段动态项目画面，前段有女性讲解素材，配简体中文女性旁白和 VTT 字幕；并非 76 秒单张图。
- 侧边女性为 Mixkit 免费素材中的讲解画面，不是酒店员工或官方代言人；普通话为合成配音。其余专题短片也为多段动态剪辑。
- 项目影像可能包含效果图、可视化和动画；不可笼统标称为酒店实景摄影。网站配图中，旧采石场挖掘机照片采用 CC BY 2.0，署名 Forgemind ArchiMedia；完整媒体来源和许可见 MEDIA-NOTES.txt。
- 原项目视频的复用权尚未核实。发布前必须确认许可，尤其是对带广告的公开网站；裁切角落标记不等于取得版权许可。

广告与隐私：
AdSense 脚本与 ads.txt 已配置，但不代表网站已获批、广告已展示或产生收入。需在 AdSense 账户启用 Auto ads，并遵守 Google 的隐私与同意管理要求。未填充广告时页面不会显示固定空框。

联系邮箱：contact@wonderlandhotelshanghai.mkm.fan
仅显示邮箱地址不会创建邮箱服务；实际收信需要另行配置邮件服务和 MX 记录。
