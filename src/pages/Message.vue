<template>
  <div class="Message">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="新闻资讯" name="1">
        <ul>
          <li v-for="(item,index) in news" v-if="index<5" class="li">
            <router-link :to="{name:'Message_show',params:{index:index,news}}">{{news[index].title}}</router-link>
          </li>
        </ul>
        <div class="more">
          <router-link :to="{name:'Message_list',params:{title:'新闻资讯',news}}">more</router-link>
        </div>
      </el-collapse-item>
      <el-collapse-item title="名家名曲" name="2">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div class="more">more</div>
      </el-collapse-item>
      <el-collapse-item title="院校团体" name="3">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div class="more">more</div>
      </el-collapse-item>
      <el-collapse-item title="器乐杂谈" name="4">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div class="more">more</div>
      </el-collapse-item>
      <el-collapse-item title="演艺图库" name="5">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div class="more">more</div>
      </el-collapse-item>
      <el-collapse-item title="器乐札记" name="6">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div class="more">more</div>
      </el-collapse-item>
      <el-collapse-item title="音乐辞典" name="7">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div class="more">more</div>>
      </el-collapse-item>
      <el-collapse-item title="名曲欣赏" name="8">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div class="more">more</div>
      </el-collapse-item>
      <el-collapse-item title="乐理知识" name="9">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <div class="more">more</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<style>
</style>

<script>
  export default {
    data(){
      return{
        activeName: '',
        news:[
          {
            title:'吉林省音乐家协会召开吉林民俗风情组歌研讨会',
            time:'2017-10-13',
            autor:'乐器学习网',
            text:'<p>为使省音协申报成功的中国文联扶持资助工程项目《吉林民俗风情组歌》顺利进行，10月12日上午，吉林省音乐家协会召开《吉林民俗风情组歌》研讨会。项目主创田然、著名词作家王晓岭、词作家刘申五、作曲家赵黎东、作曲家大平等十余位词、曲作家参与此次研讨。</p><p>研讨会中，项目主创词作家田然首先做《吉林民俗风情组歌》情况汇报，吉林省音乐家协会副秘书长马秀华对参与此项目创作的专家表示感谢，她说：此项目具有展示吉林省民俗文化的深刻意义，希望词曲作家可以潜心创作，为吉林省的音乐事业多做贡献。著名词作家王晓岭对题材创作进行了总体策划和安排，他针对选题的目标、意义、注意事项等内容进行了深刻阐述。刘申武、赵黎东、大平、张天赋等词、曲作家对组歌创作展开了热烈讨论。大家纷纷表示：将围绕吉林民俗风情潜心开展创作，力争将吉林民俗用音乐的形式充分展现，为全国民俗文化增加一缕亮色。</p>'
          },
          {
            title:'安徽省第三届“黄山杯”二胡、琵琶大赛在合肥举办',
            time:'2017-10-13',
            autor:'乐器学习网',
            text:'<p>为推动二胡、琵琶艺术发展，促进交流，提高二胡、琵琶教学和演奏的整体水平，丰富我省的文化内涵和市民的精神文化生活，由安徽省音乐家协会主办，安徽省音乐家协会民族弓弦乐委员会、安徽省音乐家协会琵琶委员会、合肥佳韵琴行共同承办的安徽省第三届“黄山杯”二胡、琵琶大赛于2017年10月4日下午在合肥望江宾馆圆满落下帷幕。</p><p>本次安徽省“黄山杯”二胡、琵琶大赛吸引了全省六百余名不同年龄阶段的二胡、琵琶选手参加。为保证大赛的公正性和专业性，大赛特别邀请了琵琶演奏家、教育家、上海音乐学院民族音乐原系主任李景侠，西安音乐学院民族乐器系弹拨教研室主任、副教授任畅，武汉音乐学院中国器乐系副教授刘洋，上海大学音乐学院青年二胡演奏家任华清和安徽省音乐家协会专职副主席、一级作曲谢林义，安徽省音乐家协会副主席、安徽省艺术职业学院民乐团特聘常任指挥、一级指挥周晓平，安徽省音乐家协会副主席、合肥师范学院音乐学院院长、教授罗可曼，安徽省音乐家协会副主席、中国民族管弦乐学会常务理事、副研究馆员撒世斌，及多位安徽省内音乐家担任了大赛评委。</p><p>安徽省音乐家协会民族弓弦乐委员会会长  张彤</p><p>安徽省音乐家协会琵琶委员会会长  胡锦华</p><p>比赛分预赛、决赛二轮进行。经过决赛的激烈角逐和评委的认真评比，最终分组别评选出了荣获少儿A组、少儿B组、青少年A组、青少年B组、成人组和齐奏、重奏组的一等奖、二等奖、三等奖、优秀演奏奖的参赛选手及若干组织奖、优秀教师奖等。其中，荣获二胡一等奖的选手有：少儿A组的王浩宇、郭艺泓；少儿B组的张敬然、黄烁冰、胡天昊、张钟铭、夏宇航、祁浩然、罗天；青少年A组的许艺凡、马欣悦、金韵秋、杭梦茹、郑晴；青少年B组的董航、林宣彤、杨韫绮；成人组的王丹慧、王雪静、陶博文；齐奏、重奏组的朱宸、董昕悦、郝贝贝、张钟铭、黄烁冰。荣获琵琶一等奖的选手有：少儿A组的张艺琼、王汐冉、孟子涵；少儿B组的彭文娣、沈鑫男、王岚、杨芷萱、周思彤、杨澄沁雯；青少年A组的董德、贾沄轩、陈笑阳；青少年B组的伍玥、方华晴；成人组的何梦颖、佘杨璐；齐奏、重奏组的周思彤、张雪凝、刘可裕、李歆怡、李彤、申静怡、贾沄轩、段强珂、纪雅璇、詹苏卉、沈鑫男、张苏菲、蔡雨昕、梅静怡。</p><p>“黄山杯”二胡、琵琶大赛不仅推动了安徽省二胡、琵琶艺术的发展，促进了我省优秀二胡、琵琶演奏人才的交流和成长，更是做到了文化惠民，让百姓走近高雅音乐艺术，以传承国乐文化精粹为己任，向社会公众全方位地展示出了中国传统民族乐器的魅力！</p>'
          },
          {
            title:'第九届广西音乐舞蹈比赛决赛 新人新作亮相',
            time:'2017-10-13',
            autor:'乐器学习网',
            text:'<p>10月11日晚，第九届广西音乐舞蹈比赛决赛在南宁开赛。大赛共持续4天，10月15日将在南宁剧场举行颁奖暨汇报演出。</p><p>本届比赛分为声乐、器乐、舞蹈三个艺术类别，决赛节目共计148个。11日晚，舞蹈类第一场决赛率先举行。独舞《追忆》寄托哀思，舞者情到深处泪流满面；《英雄赋》气势浩大，重现乱世英雄豪情……14个风格各异的舞蹈作品同台竞演，新人新作展现出高超水平。</p><p>大赛组委会邀请了中国音乐学院、四川大学艺术学院、北京舞蹈学院、空政文工团等单位的著名艺术家，以及广西本土知名艺术家担任评委。比赛期间还将举行多场点评会，以真正达到通过比赛来提升创作水平和表演水平的目的。</p><p>广西音乐舞蹈比赛是由广西文化厅主办的全区性艺术赛事，比赛每两年一届，是推动和繁荣全区音乐舞蹈创作的重要平台，曾推出一大批耳熟能详的歌曲、器乐曲和舞蹈作品。</p>'
          },
          {
            title:'甘肃陇南白马人音乐舞蹈展演在西北师范大学上演',
            time:'2017-10-13',
            autor:'乐器学习网',
            text:'<p>近日，2017年甘肃省学校美育“一节一赛一交流”陇南白马人音乐舞蹈展演，在西北师范大学上演。本次展演演绎了白马藏族非物质文化遗产的精髓，全方位展示了灿烂的民族文化。早些时候，该展演还在兰州财经大学陇桥学院、兰州城市学院精彩上演。</p><p>展演分传承人展示、成果展示和创作展示三部分。以国家级非物质文化遗产原生态傩祭祀仪程表演《池哥昼》开场，国家级传承人余林机、省级传承人班代寿、市级传承人薛刚花为观众展示了一幅色彩斑斓、绚丽多姿的白马藏族文化画卷，生动再现了白马藏族的祭祀、爱情、劳作及欢庆场面。</p><p>展演在演员和现场观众共同参与的民间歌舞《火圈舞》中落下帷幕。演员们以古朴的原生态表现方式，演绎了白马藏族非物质文化遗产的精髓，全方位展示了灿烂的民族文化，彰显了白马藏族如凤凰涅槃般追求幸福生活的勃勃生机和力量，让观众们在生动的表演中了解白马藏族民俗文化。</p><p>据悉，本次展演活动由甘肃省教育厅、甘肃省音乐家协会主办，西北师范大学音乐学院、舞蹈学院、兰州城市学院音乐学院、兰州财经大学陇桥学院协办。是“非遗”项目进高校，通过成果转换来完善、丰富高校的专业建设和人才培养计划，使其发挥重大的人才培养和“非遗”传承保护作用的有益尝试。</p>'
          },
          {
            title:'哈尔滨音乐学院本学期将举办12场“周末音乐会”',
            time:'2017-10-12',
            autor:'乐器学习网',
            text:'<p>从哈尔滨音乐学院获悉，自本月14日起，哈尔滨音乐学院将定期举办“周末音乐会”，本学期周末音乐会将连演12场。</p><p>周末音乐会”首场演出将于14日在哈尔滨音乐学院音乐厅举行。“周末音乐会”以哈尔滨音乐学院师生艺术实践演出和全国其他音乐院校、知名演出团体交流演出为主，涉及交响乐、民族管弦乐、室内乐、歌剧、合唱、独唱等多种艺术形式。周末音乐会将集合一系列优秀的艺术作品，为音乐爱好者提供全方位的音乐视角和近距离接触音乐经典的机会。</p>'
          },
          {
            title:'首届音乐（演艺）设施设备博览会成都音乐产业再获220亿元投资',
            time:'2017-10-13',
            autor:'乐器学习网',
            text:'<p>在前不久举办的2017首届成都国际音乐（演艺）设施设备博览会上，成都市10个音乐产业项目完成签约，成都音乐产业再获总金额逾220亿元的投资。</p><p>首届成都国际音乐（演艺）设施设备博览会吸引了来自国内外的200余家音乐产业相关企业参加。博览会期间，“成都国际音乐装备文化创意产业园”“成都西部音乐灯光公园”等重点项目还进行了路演。据主办方介绍，成都国际音乐（演艺）设施设备博览会计划从今年起每年举办一届，持续举办5年，力求逐步打造成为一个“成都品牌、国际知名”的专业化音乐产业展示交易平台，通过政府搭台聚集社会资本，放大政策效应，为成都音乐产业发展不断注入新的活力。</p>'
          },
          {
            title:'中国音乐治疗学会第十三届学术交流大会通知',
            time:'2017-10-13',
            autor:'乐器学习网',
            text:'<p>中国音乐治疗学会第十三届学术交流大会</p><p>（第二轮通知）</p><p>为响应中共十八大报告中加强人文关怀和心理疏导、提高人民身心健康水平的要求，中国音乐治疗学会第十三届学术交流大会将于 2017年10月20-10月22日 在上海·复旦大学召开，本次大会以“音乐治疗护航全民心理健康”为主题，目的是把音乐治疗与大众心理健康的关系多角度呈现出来，为实现全民心理健康补充更多的疏导及治疗手段。</p><p> 本次大会特邀国际顶级专家 纽约声乐心理治疗高级培训项目的创始人和主任DianneAustin（美国）、美国堪萨斯大学音乐教育博士Min-Jeong Bae 做特邀报告，以及海内外众多心理学家、音乐康复专家汇聚一堂就大会主题展开精彩演讲与激烈讨论。带来最前沿的学术研究、专业的实践技能通。旨在为参会者展示音乐治疗最前沿的技术、方法、以及器具资源等，同时还将分享音乐治疗在教育系统、医疗专业、社会工作等环境下的实践与应用情况，此次还有精采纷呈的应用领域、评估与练习、技术方法等几方面的专题工作坊供参会者学习。</p><p>组织单位</p><p>主办单位：中国音乐治疗学会</p><p>承办单位：复旦大学社会发展与公共政策学院心理学系</p><p>中科博爱（北京）心理医学研究院</p><p>协办单位：复旦大学心理研究中心</p><p>复旦大学中西医结合研究院健康与医学心理研究所</p><p>上海交通大学附属精神卫生中心</p><p>上海市心理卫生学会</p><p>心教育平台</p><p>会议时间</p><p>2017年10月20-22日（20日13:00---21:00报到）</p>'
          }
        ],
        musician:[
          {
            title:'吉林省音乐家协会召开吉林民俗风情组歌研讨会1',
            text:'<p>吉林省音乐家协会召开吉林民俗风情组歌研讨会</p><p>为使省音协申报成功的中国文联扶持资助工程项目《吉林民俗风情组歌》顺利进行，10月12日上午，吉林省音乐家协会召开《吉林民俗风情组歌》研讨会。项目主创田然、著名词作家王晓岭、词作家刘申五、作曲家赵黎东、作曲家大平等十余位词、曲作家参与此次研讨。</p><p>研讨会中，项目主创词作家田然首先做《吉林民俗风情组歌》情况汇报，吉林省音乐家协会副秘书长马秀华对参与此项目创作的专家表示感谢，她说：此项目具有展示吉林省民俗文化的深刻意义，希望词曲作家可以潜心创作，为吉林省的音乐事业多做贡献。著名词作家王晓岭对题材创作进行了总体策划和安排，他针对选题的目标、意义、注意事项等内容进行了深刻阐述。刘申武、赵黎东、大平、张天赋等词、曲作家对组歌创作展开了热烈讨论。大家纷纷表示：将围绕吉林民俗风情潜心开展创作，力争将吉林民俗用音乐的形式充分展现，为全国民俗文化增加一缕亮色。</p>'
          }
        ],
        colleges:[],
        zatan:[],
        tuku:[],
        zhaji:[],
        cidian:[],
        music:[],
        yueli:[]
      }
    }
  }
</script>

