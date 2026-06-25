/* ============================================
   BMS 商标设计方案 - Premium PWA 应用脚本
   ============================================ */

// ============================================
// 方案数据（100个）
// ============================================
const SCHEMES = [
  // ---- 通用风格 (general) ----
  { id: 1, name: '现代科技风', desc: 'BMS 字母抽象融合几何图形，渐变绿色层次分明，科技感强。', category: 'general', img: 'images/01.png' },
  { id: 2, name: '极简创新风', desc: 'BMS 三字母连体设计，线条统一圆润，识别度高，应用灵活。', category: 'general', img: 'images/02.png' },
  { id: 3, name: '高端商务风', desc: '圆形图腾内含无限符号与上升箭头，搭配衬线字体，稳重专业。', category: 'general', img: 'images/03.png' },
  { id: 4, name: '纯字标现代风', desc: '现代无衬线粗体字，转角锐利，简洁有力，适合科技创新企业。', category: 'general', img: 'images/04.png' },
  { id: 5, name: '线性极简风', desc: '单线条勾勒 BMS 字母组合，纤细均匀，极简优雅。', category: 'general', img: 'images/05.png' },
  { id: 6, name: '手写书法风', desc: '流畅手写书法体，笔画有粗细变化，富有艺术感与创意气质。', category: 'general', img: 'images/06.png' },
  { id: 7, name: '对称平衡风', desc: '左右对称设计，经典衬线字体，庄重平衡，体现稳定与专业。', category: 'general', img: 'images/07.png' },
  { id: 8, name: '渐变光影风', desc: '光影渐变效果，字母边缘有柔和光晕，通透高级，现代感强。', category: 'general', img: 'images/08.png' },
  { id: 9, name: '徽章印章风', desc: '圆形徽章印章设计，复古质感，庄重正式，传统与创新结合。', category: 'general', img: 'images/09.png' },
  { id: 10, name: '负空间创意风', desc: '绿色圆角方块内负空间呈现 BMS，设计巧妙有创意。', category: 'general', img: 'images/10.png' },
  { id: 11, name: '立体渐变风', desc: '3D 立体效果 BMS 字母，光泽阴影，科技感与未来感十足。', category: 'general', img: 'images/11.png' },
  { id: 12, name: '几何多边形风', desc: '多色块拼接组成 B 字变形，棱角分明，现代科技感。', category: 'general', img: 'images/12.png' },
  { id: 13, name: '盾牌信任风', desc: '盾牌形状图形标，体现专业可靠，稳重可信。', category: 'general', img: 'images/13.png' },
  { id: 14, name: '动态流动风', desc: '流畅绿色曲线组成 S 形，富有动感活力，体现创新浪潮。', category: 'general', img: 'images/14.png' },
  { id: 15, name: '像素方块风', desc: '像素方块组成 BMS，复古与现代结合，科技互联网气质。', category: 'general', img: 'images/15.png' },
  { id: 16, name: '圆环循环风', desc: '三条绿丝带环绕成圆环，象征循环创新与无限可能。', category: 'general', img: 'images/16.png' },
  { id: 17, name: '箭头增长风', desc: 'BMS 变形为向上箭头，动感有力，象征增长进步。', category: 'general', img: 'images/17.png' },
  { id: 18, name: '叶片环保风', desc: 'stylized 绿色叶片，清新自然，体现绿色创新与可持续发展。', category: 'general', img: 'images/18.png' },
  { id: 19, name: '点阵科技风', desc: '绿色点阵组成 BMS，数字科技感，适合高科技创新企业。', category: 'general', img: 'images/19.png' },
  { id: 20, name: '简约图标风', desc: '方形圆角图标，内部抽象创新符号，极简易识别，适配 APP 等场景。', category: 'general', img: 'images/20.png' },

  // ---- 创始人故事 (story) ----
  { id: 21, name: '森林自然风', desc: '三片绿叶组成 B 字母形态，呼应"林"姓，清新自然，体现绿色创新与人文关怀。', category: 'story', img: 'images/21.png' },
  { id: 22, name: '梅花品格风', desc: '五瓣梅花（台湾象征）花心藏 B 字，象征高洁品格与坚韧精神。', category: 'story', img: 'images/22.png' },
  { id: 23, name: '诚信握手风', desc: '握手与心形结合的抽象图形，象征诚信、友善与合作。', category: 'story', img: 'images/23.png' },
  { id: 24, name: '跨海连接风', desc: '弧线连接两端，象征台湾与澳洲跨海相连，BMS 字母融入其中。', category: 'story', img: 'images/24.png' },
  { id: 25, name: '玉山高峰风', desc: '台湾玉山轮廓，隐含 M 字母形态，山顶星光闪耀。', category: 'story', img: 'images/25.png' },
  { id: 26, name: '袋鼠活力风', desc: '抽象袋鼠跳跃造型融入 B 字母，充满动感活力。', category: 'story', img: 'images/26.png' },
  { id: 27, name: '温暖阳光风', desc: '柔和的绿色光芒围绕 B 字，如澳洲阳光般温暖亲和。', category: 'story', img: 'images/27.png' },
  { id: 28, name: '地球国际风', desc: '绿色地球图形隐含 B 字大陆轮廓，体现全球化视野。', category: 'story', img: 'images/28.png' },
  { id: 29, name: '海洋波浪风', desc: '三道递进的绿色波浪，既象征海洋连接两岸三地，也寓意创新浪潮奔涌向前。', category: 'story', img: 'images/29.png' },

  // ---- 大师级 (master) ----
  { id: 30, name: '黄金比例几何', desc: '基于黄金分割比例精确构建，每一根线条、每一个圆弧都遵循斐波那契数列。', category: 'master', img: 'images/30.png' },
  { id: 31, name: '折纸立体几何', desc: '一张纸折叠出的空间魔法，多面体折面呈现丰富的光影层次。', category: 'master', img: 'images/31.png' },
  { id: 32, name: '一笔画禅意', desc: '一根线条一气呵成完成 BMS，首尾相连形成闭环，东方禅意美学。', category: 'master', img: 'images/32.png' },
  { id: 33, name: '正负形双关', desc: '正看是 B，细看藏着 M 与 S 的负空间。一图双关，越品越有味道。', category: 'master', img: 'images/33.png' },
  { id: 34, name: '东方篆刻印章', desc: '金石篆刻质感，斑驳的印边自带岁月厚重感，将西方字母融入东方印章美学。', category: 'master', img: 'images/34.png' },
  { id: 35, name: '莫比乌斯无限环', desc: '莫比乌斯环的无限循环结构，象征创新永无止境。', category: 'master', img: 'images/35.png' },
  { id: 36, name: '定制原创字标', desc: '完全原创的定制字体，每一笔画都经过独特设计，识别度极高。', category: 'master', img: 'images/36.png' },
  { id: 37, name: '点阵构成主义', desc: '无数圆点聚散成字，边缘处逐渐消散如粒子飞散，既有科技未来感又有构成主义艺术气质。', category: 'master', img: 'images/37.png' },
  { id: 38, name: '同心圆涟漪', desc: '如水滴落水面激起的层层涟漪，波纹疏密间隐现 BMS 形态，优雅有韵律。', category: 'master', img: 'images/38.png' },

  // ---- 贸易核心 (trade) ----
  { id: 39, name: '集装箱航运', desc: '将字母 B 与集装箱轮廓巧妙融合，M 化为叠放的双层货柜，S 呈现流畅的航线弧度。', category: 'trade', img: 'images/39.png' },
  { id: 40, name: '握手契约', desc: 'BMS 三个字母构成两只相握的手的抽象轮廓，象征贸易合作中的信任与契约精神。', category: 'trade', img: 'images/40.png' },
  { id: 41, name: '经纬地球', desc: '以地球经纬线为基底，BMS 字母嵌入球体网格之中，绿色经线象征跨越时区的全球贸易网络。', category: 'trade', img: 'images/41.png' },
  { id: 42, name: '贸易之桥', desc: '字母 B 与 M 之间以弧形桥梁相连，S 化为桥下的流水倒影，寓意 BMS 是连接买卖双方的贸易桥梁。', category: 'trade', img: 'images/42.png' },
  { id: 43, name: '双向箭头', desc: 'BMS 字母两端延伸出对称的进出口箭头，形成双向流通的视觉动势。', category: 'trade', img: 'images/43.png' },
  { id: 44, name: '品质盾徽', desc: '以盾牌外框包裹 BMS 字标，盾内嵌入品质认证的勾选符号，绿色盾牌传递安全可靠。', category: 'trade', img: 'images/44.png' },
  { id: 45, name: '市场钥匙', desc: '字母 B 的上半部变形为钥匙头部，M 与 S 构成钥匙齿纹，象征 BMS 为客户打开全球商机。', category: 'trade', img: 'images/45.png' },
  { id: 46, name: '供应链齿轮', desc: '三个相互咬合的齿轮分别承载 B、M、S 字母，齿轮运转象征供应链各环节高效协作。', category: 'trade', img: 'images/46.png' },
  { id: 47, name: '跨国旗帜', desc: 'BMS 字母以旗帜飘扬的形态呈现，旗杆贯穿三个字母形成统一整体。', category: 'trade', img: 'images/47.png' },
  { id: 48, name: '稳固之锚', desc: '字母 B 的竖线延伸为锚杆，M 化为锚冠横杆，S 构成锚爪弧线，传递商业稳定、可靠伙伴。', category: 'trade', img: 'images/48.png' },
  { id: 49, name: '远航风帆', desc: '字母 BMS 整体构成一艘帆船的侧面剪影，B 为船身、M 为风帆、S 为船尾水波。', category: 'trade', img: 'images/49.png' },
  { id: 50, name: '战略指南针', desc: '以指南针罗盘为框架，BMS 字母沿罗盘方位排列，寓意为客户提供精准导航与战略指引。', category: 'trade', img: 'images/50.png' },
  { id: 51, name: '信赖灯塔', desc: '字母 B 化为灯塔塔身，M 构成灯塔灯室，S 呈现向外发散的光束。', category: 'trade', img: 'images/51.png' },
  { id: 52, name: '环扣链条', desc: 'B、M、S 三个字母以链条环扣的方式首尾相连，形成一条完整的链条。', category: 'trade', img: 'images/52.png' },
  { id: 53, name: '全球蜂巢', desc: '以六边形蜂巢结构排列 BMS 字母，蜂巢网络象征全球贸易网络的精密高效。', category: 'trade', img: 'images/53.png' },
  { id: 54, name: '钻石品质', desc: '字母 BMS 构成一颗钻石的切面轮廓，多棱面折射绿色光芒。', category: 'trade', img: 'images/54.png' },
  { id: 55, name: '卓越皇冠', desc: '字母 B 的顶部延伸为皇冠造型，M 与 S 稳固支撑其下，皇冠象征行业领先地位。', category: 'trade', img: 'images/55.png' },
  { id: 56, name: '和平鸽翼', desc: '字母 BMS 整体构成一只展翅和平鸽的轮廓，翅膀展开呈 V 字形。', category: 'trade', img: 'images/56.png' },
  { id: 57, name: '橄榄共赢', desc: '以橄榄枝环绕 BMS 字标，枝叶沿字母曲线自然生长，象征互惠互利、和平贸易。', category: 'trade', img: 'images/57.png' },
  { id: 58, name: '腾飞之翼', desc: '字母 BMS 左右两侧展开对称的翅膀造型，整体呈向上飞升的动势。', category: 'trade', img: 'images/58.png' },

  // ---- 贸易场景 (scene) ----
  { id: 59, name: '集装箱堆叠', desc: '以层叠的集装箱构成字母BMS的立体造型，绿色色块错落有致。', category: 'scene', img: 'images/59.png' },
  { id: 60, name: '货轮远航', desc: '一艘简洁的货轮剪影在绿色海浪上平稳前行，船身巧妙融入BMS字样。', category: 'scene', img: 'images/60.png' },
  { id: 61, name: '飞机航线', desc: '绿色飞机尾迹在空中划出优雅弧线，轨迹交织形成字母B的轮廓。', category: 'scene', img: 'images/61.png' },
  { id: 62, name: '铁轨延伸', desc: '两条平行铁轨向远方延伸，交汇处自然构成M字母形态。', category: 'scene', img: 'images/62.png' },
  { id: 63, name: '货币交织', desc: '三枚不同面值的货币符号以绿色线条交织缠绕，整体构成BMS的抽象图形。', category: 'scene', img: 'images/63.png' },
  { id: 64, name: '天平公正', desc: '一架精密的天平以绿色线条勾勒，两侧托盘分别承载字母B与S，M作为支点居中。', category: 'scene', img: 'images/64.png' },
  { id: 65, name: '契约印章', desc: '绿色圆形印章内嵌BMS字样，外圈环绕橄榄枝纹饰。', category: 'scene', img: 'images/65.png' },
  { id: 66, name: '商务信封', desc: '打开的商务信封中飞出绿色纸飞机，信封折角巧妙形成字母B。', category: 'scene', img: 'images/66.png' },
  { id: 67, name: '贸易路线图', desc: '世界地图轮廓以绿色虚线标注贸易航线，关键节点以BMS三字母标注。', category: 'scene', img: 'images/67.png' },
  { id: 68, name: '仓储矩阵', desc: '整齐排列的仓库门面以绿色渐变构成BMS字母矩阵。', category: 'scene', img: 'images/68.png' },
  { id: 69, name: '叉车搬运', desc: '叉车的叉臂以绿色几何形态托起字母BMS，简洁有力的线条。', category: 'scene', img: 'images/69.png' },
  { id: 70, name: '条码流通', desc: '将BMS字母转化为绿色条形码的粗细条纹，扫描线贯穿其间。', category: 'scene', img: 'images/70.png' },
  { id: 71, name: '出口包装箱', desc: '绿色打包箱的封箱胶带交错形成BMS标识，箱体立体感十足。', category: 'scene', img: 'images/71.png' },
  { id: 72, name: '海关通行', desc: '绿色通关章印在抽象的护照页面上，印章图案内含BMS字样。', category: 'scene', img: 'images/72.png' },
  { id: 73, name: '贸易展台', desc: '俯视角度的展位以绿色隔断构成BMS的平面布局。', category: 'scene', img: 'images/73.png' },
  { id: 74, name: '商务名片', desc: '一张翻折的绿色商务名片，折叠弧线勾勒出字母BMS的轮廓。', category: 'scene', img: 'images/74.png' },
  { id: 75, name: '茶杯洽谈', desc: '两只绿色茶杯相对而放，杯中升腾的热气交织形成字母M。', category: 'scene', img: 'images/75.png' },
  { id: 76, name: '沙漏时效', desc: '绿色沙漏的上下玻璃以BMS字母造型呈现，细沙匀速流淌。', category: 'scene', img: 'images/76.png' },
  { id: 77, name: '市场放大镜', desc: '绿色放大镜的镜框与手柄构成字母B，镜片内映射出全球贸易数据的抽象图形。', category: 'scene', img: 'images/77.png' },
  { id: 78, name: '拼图整合', desc: '三块绿色拼图以不同深浅嵌合，拼合边缘自然形成BMS三个字母。', category: 'scene', img: 'images/78.png' },

  // ---- 东方智慧 (eastern) ----
  { id: 79, name: '双手托举', desc: '以一双稳健的手掌向上托起BMS字母，象征贸易伙伴间的托付信任与承载责任。', category: 'eastern', img: 'images/79.png' },
  { id: 80, name: '大树深根', desc: '一棵枝繁叶茂的大树扎根于BMS字母之上，根系深入大地，寓意基业长青。', category: 'eastern', img: 'images/80.png' },
  { id: 81, name: '山峰攀登', desc: '将BMS三字母融入巍峨山峰轮廓之中，峰顶直指云霄，象征攀登行业高峰。', category: 'eastern', img: 'images/81.png' },
  { id: 82, name: '北极星指引', desc: '一颗璀璨北极星镶嵌于BMS字母顶部，光芒四射，寓意BMS如同行业指路明灯。', category: 'eastern', img: 'images/82.png' },
  { id: 83, name: '剑盾合一', desc: '左盾右剑巧妙组合成BMS字形，盾守信誉、剑拓市场，象征攻守兼备之道。', category: 'eastern', img: 'images/83.png' },
  { id: 84, name: '火炬传承', desc: '一支燃烧的火炬火焰化为BMS字母形态，象征薪火相传、持续经营。', category: 'eastern', img: 'images/84.png' },
  { id: 85, name: '莲花清正', desc: '一朵盛开的莲花花瓣自然构成BMS轮廓，出淤泥而不染，象征商业诚信。', category: 'eastern', img: 'images/85.png' },
  { id: 86, name: '如意吉祥', desc: '传统如意造型巧妙融入BMS字母曲线，线条流畅圆润，寓意生意兴隆。', category: 'eastern', img: 'images/86.png' },
  { id: 87, name: '祥云瑞运', desc: '三朵祥云环绕BMS字母缓缓升腾，云纹飘逸灵动，象征鸿运当头。', category: 'eastern', img: 'images/87.png' },
  { id: 88, name: '太极平衡', desc: '阴阳太极图中央嵌入BMS字母，黑白交融、圆融和谐，象征互利共赢。', category: 'eastern', img: 'images/88.png' },
  { id: 89, name: '八卦智慧', desc: '八卦卦象环绕BMS字母排列成圆，象征运筹帷幄、决胜千里。', category: 'eastern', img: 'images/89.png' },
  { id: 90, name: '书法儒商', desc: 'BMS三字母以行书笔意一气呵成，笔锋遒劲有力又不失儒雅。', category: 'eastern', img: 'images/90.png' },
  { id: 91, name: '篆刻信誉', desc: 'BMS字母以篆刻印章风格呈现，方圆有度、古朴庄重，象征一诺千金。', category: 'eastern', img: 'images/91.png' },
  { id: 92, name: '窗花精致', desc: '以中国传统窗花剪纸艺术手法镂刻出BMS字母，纹样精细繁复。', category: 'eastern', img: 'images/92.png' },
  { id: 93, name: '折扇展开', desc: '一把半开的折扇扇面展开成BMS弧形，扇骨挺拔、扇面舒展。', category: 'eastern', img: 'images/93.png' },
  { id: 94, name: '竹节高升', desc: '三段竹节依次拔高构成BMS字母形态，竹节分明、挺拔向上。', category: 'eastern', img: 'images/94.png' },
  { id: 95, name: '梅花坚韧', desc: '梅花五瓣围绕BMS字母绽放，凌寒独开、傲骨铮铮。', category: 'eastern', img: 'images/95.png' },
  { id: 96, name: '水墨东方', desc: 'BMS字母以水墨晕染技法呈现，浓淡相宜、气韵生动。', category: 'eastern', img: 'images/96.png' },
  { id: 97, name: '龙首权威', desc: '一条盘龙龙首昂扬构成BMS字母主体，龙鳞层叠、龙目炯炯。', category: 'eastern', img: 'images/97.png' },
  { id: 98, name: '凤凰涅槃', desc: '凤凰展翅飞翔的剪影融入BMS字母之中，羽翼华丽、姿态昂扬。', category: 'eastern', img: 'images/98.png' },
  { id: 99, name: '麒麟祥瑞', desc: '麒麟昂首挺胸的造型化为BMS字母轮廓，瑞兽威仪、祥光环绕。', category: 'eastern', img: 'images/99.png' },
  { id: 100, name: '锦鲤跃门', desc: '一条锦鲤纵身跃起的动态剪影构成BMS字母，鱼身弧线充满张力。', category: 'eastern', img: 'images/100.png' }
];

// 分类配置
const CATEGORIES = [
  { key: 'all', label: '全部方案', count: 100 },
  { key: 'general', label: '通用风格', count: 20 },
  { key: 'story', label: '创始人故事', count: 9 },
  { key: 'master', label: '大师级', count: 9 },
  { key: 'trade', label: '贸易核心', count: 20 },
  { key: 'scene', label: '贸易场景', count: 20 },
  { key: 'eastern', label: '东方智慧', count: 22 }
];

const CATEGORY_LABELS = {
  general: '通用风格',
  story: '创始人故事',
  master: '大师级',
  trade: '贸易核心',
  scene: '贸易场景',
  eastern: '东方智慧'
};

// SVG 图标模板
const ICONS = {
  heart: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFilled: `<svg width="16" height="16" viewBox="0 0 24 24" fill="#E53935" stroke="#E53935" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  search: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  arrowLeft: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,
  arrowRight: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  close: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
};

// ============================================
// 应用状态
// ============================================
const state = {
  currentCategory: 'all',
  searchQuery: '',
  favorites: JSON.parse(localStorage.getItem('bms_favorites') || '[]'),
  darkMode: localStorage.getItem('bms_darkmode') === 'true',
  currentModalIndex: -1,
  filteredSchemes: [...SCHEMES],
  viewMode: localStorage.getItem('bms_viewmode') || 'grid',
  isLoaded: false
};

// ============================================
// DOM 引用
// ============================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initViewMode();
  renderFilterButtons();
  bindEvents();
  registerSW();

  // 模拟骨架屏加载，给用户高端加载体验
  setTimeout(() => {
    renderCards();
    animateCountUp();
    state.isLoaded = true;
  }, 600);
});

// ============================================
// 数字递增动画
// ============================================
function animateCountUp() {
  const counters = $$('.hero-stat-num');
  counters.forEach(el => {
    const target = parseInt(el.dataset.count);
    const duration = 1200;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

// ============================================
// 主题切换
// ============================================
function initTheme() {
  if (state.darkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function toggleTheme() {
  state.darkMode = !state.darkMode;
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : '');
  localStorage.setItem('bms_darkmode', state.darkMode);
}

// ============================================
// 视图切换
// ============================================
function initViewMode() {
  const grid = $('#card-grid');
  const toggle = $('#view-toggle');
  if (state.viewMode === 'list') {
    grid.classList.add('list-view');
    toggle.classList.add('list-view');
  }
}

function toggleView() {
  const grid = $('#card-grid');
  const toggle = $('#view-toggle');
  state.viewMode = state.viewMode === 'grid' ? 'list' : 'grid';
  localStorage.setItem('bms_viewmode', state.viewMode);

  if (state.viewMode === 'list') {
    grid.classList.add('list-view');
    toggle.classList.add('list-view');
  } else {
    grid.classList.remove('list-view');
    toggle.classList.remove('list-view');
  }
}

// ============================================
// 筛选按钮渲染
// ============================================
function renderFilterButtons() {
  const container = $('#filter-buttons');
  if (!container) return;
  container.innerHTML = CATEGORIES.map(cat => `
    <button class="filter-btn ${cat.key === state.currentCategory ? 'active' : ''}"
            data-category="${cat.key}">
      ${cat.label}<span class="filter-count">(${cat.count})</span>
    </button>
  `).join('');
}

// ============================================
// 卡片渲染
// ============================================
function renderCards() {
  const grid = $('#card-grid');
  const skeleton = $('#skeleton-grid');
  if (!grid) return;

  let filtered = SCHEMES;

  // 分类筛选
  if (state.currentCategory !== 'all') {
    filtered = filtered.filter(s => s.category === state.currentCategory);
  }

  // 搜索筛选
  if (state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();
    filtered = filtered.filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.desc.toLowerCase().includes(q) ||
      String(s.id).includes(q)
    );
  }

  state.filteredSchemes = filtered;

  // 更新计数
  const countEl = $('#result-count');
  if (countEl) {
    countEl.textContent = filtered.length;
  }

  // 隐藏骨架屏，显示卡片
  if (skeleton) skeleton.style.display = 'none';
  grid.style.display = '';

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        ${ICONS.search}
        <div class="empty-state-title">未找到匹配的方案</div>
        <div class="empty-state-text">请尝试更换关键词或分类筛选条件</div>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((scheme, index) => {
    const isFav = state.favorites.includes(scheme.id);
    return `
      <div class="card" data-id="${scheme.id}" style="animation-delay: ${Math.min(index * 0.03, 0.24)}s">
        <div class="card-image-wrapper">
          <img src="${scheme.img}" alt="方案 ${String(scheme.id).padStart(2, '0')} ${scheme.name}"
               loading="lazy" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%23f0f4f0%22 width=%22200%22 height=%22200%22 rx=%2212%22/><text x=%2250%25%22 y=%2245%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%232E7D32%22 font-family=%22sans-serif%22 font-size=%2216%22 font-weight=%22bold%22>BMS</text><text x=%2250%25%22 y=%2260%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%239E9E9E%22 font-family=%22sans-serif%22 font-size=%2211%22>方案 ${String(scheme.id).padStart(2, '0')}</text></svg>'">
          <span class="card-number">${String(scheme.id).padStart(2, '0')}</span>
          <button class="card-fav-btn ${isFav ? 'favorited' : ''}"
                  data-fav-id="${scheme.id}"
                  onclick="event.stopPropagation(); toggleFavorite(${scheme.id})"
                  aria-label="收藏">
            ${isFav ? ICONS.heartFilled : ICONS.heart}
          </button>
        </div>
        <div class="card-body">
          <div class="card-title">方案 ${String(scheme.id).padStart(2, '0')} &middot; ${scheme.name}</div>
          <span class="card-category">${CATEGORY_LABELS[scheme.category]}</span>
          <div class="card-desc">${scheme.desc}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// 收藏功能
// ============================================
function toggleFavorite(id) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    state.favorites.push(id);
  } else {
    state.favorites.splice(idx, 1);
  }
  localStorage.setItem('bms_favorites', JSON.stringify(state.favorites));
  updateFavBadge();
  renderCards();
  renderFavPanel();
}

function updateFavBadge() {
  const badge = $('#fav-badge');
  if (badge) {
    const count = state.favorites.length;
    badge.textContent = count;
    if (count > 0) {
      badge.classList.add('visible');
    } else {
      badge.classList.remove('visible');
    }
  }
}

// ============================================
// 收藏面板
// ============================================
function openFavPanel() {
  const overlay = $('#fav-overlay');
  const panel = $('#fav-panel');
  if (overlay) overlay.classList.add('active');
  if (panel) panel.classList.add('active');
  renderFavPanel();
}

function closeFavPanel() {
  const overlay = $('#fav-overlay');
  const panel = $('#fav-panel');
  if (overlay) overlay.classList.remove('active');
  if (panel) panel.classList.remove('active');
}

function renderFavPanel() {
  const body = $('#fav-panel-body');
  const countEl = $('#fav-panel-count');
  if (!body) return;

  if (countEl) {
    countEl.textContent = state.favorites.length;
  }

  if (state.favorites.length === 0) {
    body.innerHTML = `
      <div class="fav-empty">
        ${ICONS.heart}
        <div class="fav-empty-text">还没有收藏任何方案<br>点击卡片上的心形图标即可收藏</div>
      </div>
    `;
    return;
  }

  const favSchemes = state.favorites
    .map(id => SCHEMES.find(s => s.id === id))
    .filter(Boolean)
    .sort((a, b) => a.id - b.id);

  body.innerHTML = favSchemes.map(scheme => `
    <div class="fav-item" onclick="closeFavPanel(); openModal(${scheme.id})">
      <img class="fav-item-img" src="${scheme.img}" alt="${scheme.name}" loading="lazy">
      <div class="fav-item-info">
        <div class="fav-item-title">方案 ${String(scheme.id).padStart(2, '0')} &middot; ${scheme.name}</div>
        <div class="fav-item-num">${CATEGORY_LABELS[scheme.category]}</div>
      </div>
      <button class="fav-item-remove" onclick="event.stopPropagation(); toggleFavorite(${scheme.id})"
              aria-label="取消收藏">${ICONS.close}</button>
    </div>
  `).join('');
}

// ============================================
// 模态框
// ============================================
function openModal(id) {
  const index = state.filteredSchemes.findIndex(s => s.id === id);
  if (index === -1) {
    const globalIndex = SCHEMES.findIndex(s => s.id === id);
    if (globalIndex === -1) return;
    state.currentModalIndex = globalIndex;
    renderModal(SCHEMES[globalIndex], globalIndex, SCHEMES);
  } else {
    state.currentModalIndex = index;
    renderModal(state.filteredSchemes[index], index, state.filteredSchemes);
  }

  const overlay = $('#modal-overlay');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = $('#modal-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
  state.currentModalIndex = -1;
}

function renderModal(scheme, index, list) {
  const container = $('#modal-content');
  if (!container) return;

  const isFav = state.favorites.includes(scheme.id);
  const hasPrev = index > 0;
  const hasNext = index < list.length - 1;

  container.innerHTML = `
    <button class="modal-close" onclick="closeModal()" aria-label="关闭">${ICONS.close}</button>
    <div class="modal-image-container">
      <img src="${scheme.img}" alt="方案 ${String(scheme.id).padStart(2, '0')} ${scheme.name}">
    </div>
    <div class="modal-info">
      <span class="modal-number">方案 ${String(scheme.id).padStart(2, '0')}</span>
      <h2 class="modal-title">${scheme.name}</h2>
      <span class="modal-category">${CATEGORY_LABELS[scheme.category]}</span>
      <p class="modal-desc">${scheme.desc}</p>
      <div class="modal-nav">
        <button class="modal-nav-btn" ${!hasPrev ? 'disabled style="opacity:0.4;pointer-events:none"' : ''}
                onclick="navigateModal(-1)">
          ${ICONS.arrowLeft} 上一个
        </button>
        <button class="modal-fav-btn ${isFav ? 'favorited' : ''}"
                onclick="toggleFavorite(${scheme.id}); renderModal(SCHEMES.find(s=>s.id===${scheme.id}), ${index}, state.filteredSchemes)">
          ${isFav ? ICONS.heartFilled : ICONS.heart}
        </button>
        <button class="modal-nav-btn" ${!hasNext ? 'disabled style="opacity:0.4;pointer-events:none"' : ''}
                onclick="navigateModal(1)">
          下一个 ${ICONS.arrowRight}
        </button>
      </div>
    </div>
  `;
}

function navigateModal(direction) {
  const list = state.filteredSchemes;
  const newIndex = state.currentModalIndex + direction;
  if (newIndex < 0 || newIndex >= list.length) return;
  state.currentModalIndex = newIndex;
  renderModal(list[newIndex], newIndex, list);
}

// ============================================
// 事件绑定
// ============================================
function bindEvents() {
  // 搜索输入
  const searchInput = $('#search-input');
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.searchQuery = e.target.value;
        renderCards();
      }, 200);
    });
  }

  // 分类筛选（事件委托）
  const filterContainer = $('#filter-buttons');
  if (filterContainer) {
    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      const category = btn.dataset.category;
      state.currentCategory = category;

      filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderCards();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 卡片点击（事件委托）
  const grid = $('#card-grid');
  if (grid) {
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.card');
      if (!card || e.target.closest('.card-fav-btn')) return;
      const id = parseInt(card.dataset.id);
      openModal(id);
    });
  }

  // 模态框关闭
  const modalOverlay = $('#modal-overlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // 收藏面板
  const favOverlay = $('#fav-overlay');
  if (favOverlay) {
    favOverlay.addEventListener('click', closeFavPanel);
  }

  // 主题切换
  const themeBtn = $('#theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', toggleTheme);
  }

  // 收藏按钮
  const favBtn = $('#fav-toggle');
  if (favBtn) {
    favBtn.addEventListener('click', openFavPanel);
  }

  // 收藏面板关闭
  const favPanelClose = $('#fav-panel-close');
  if (favPanelClose) {
    favPanelClose.addEventListener('click', closeFavPanel);
  }

  // 视图切换
  const viewToggle = $('#view-toggle');
  if (viewToggle) {
    viewToggle.addEventListener('click', toggleView);
  }

  // 返回顶部
  const backToTop = $('#back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 滚动事件
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const backToTop = $('#back-to-top');
        if (backToTop) {
          if (window.scrollY > 400) {
            backToTop.classList.add('visible');
          } else {
            backToTop.classList.remove('visible');
          }
        }

        // 导航栏滚动效果
        const navbar = $('#navbar');
        if (navbar) {
          if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        }

        ticking = false;
      });
      ticking = true;
    }
  });

  // 键盘事件
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if ($('#modal-overlay').classList.contains('active')) {
        closeModal();
      } else if ($('#fav-panel').classList.contains('active')) {
        closeFavPanel();
      }
    }
    if ($('#modal-overlay').classList.contains('active')) {
      if (e.key === 'ArrowLeft') navigateModal(-1);
      if (e.key === 'ArrowRight') navigateModal(1);
    }
  });
}

// ============================================
// Service Worker 注册
// ============================================
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => {
        console.log('Service Worker registered:', reg.scope);
      })
      .catch(err => {
        console.log('Service Worker registration failed:', err);
      });
  }
}
