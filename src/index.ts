import axios from 'axios';
import dotenv from 'dotenv';
let access_token;
dotenv.config();
//@ts-ignore
const getAccessToken = () => {
    return axios
        .get('https://aip.baidubce.com/oauth/2.0/token', {
            params: {
                grant_type: 'client_credentials',
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.CLIENT_SECRET
            }
        })
        .then(res => {
            return res.data.access_token;
            // console.log(access_token);
        });
};

const getNewsSummary = body => {
    return axios({
        method: 'POST',
        url: 'https://aip.baidubce.com/rpc/2.0/nlp/v1/news_summary',
        params: {
            access_token,
            charset: 'UTF-8'
        },
        data: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        // console.log('getNewsSummary', res);
        return res.data;
    });
};

const getEmotion = body => {
    return axios({
        method: 'POST',
        url: 'https://aip.baidubce.com/rpc/2.0/nlp/v1/emotion',
        params: {
            access_token,
            charset: 'UTF-8'
        },
        data: body,
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        // console.log('getNewsSummary', res);
        return res.data;
    });
};

const main = async () => {
    access_token = await getAccessToken();
    const body = {
        title:
            '华为发布全球最快AI训练集群Atlas 900：算力高达50万台PC，领先第二名10秒',
        content: `华为发布全球最快AI训练集群Atlas 900：算力高达50万台PC，领先第二名10秒
            原创： 陈思、唐小智 InfoQ 今天
            
            
            作者丨陈思、小智
            
            北京时间 9 月 18 日，2019 华为全联接大会在上海开幕，InfoQ 作为受邀媒体对本次大会进行报道。本次大会上，华为副董事长胡厚崑不仅完整展示了华为在智能计算时代的发展战略，同时还重磅发布了一款全球最快的 AI 训练集群：Atlas 900。
            1
            Atlas 900：全球最快的 AI 训练集群
            在 2019 华为全联接大会的现场，华为副董事长胡厚菎正式发布了 Atlas 900。据了解，Atlas 900 是当前全球最快的 AI 训练集群，它由数千颗昇腾 910 AI 处理器构成。Atlas 900 通过华为集群通信库和作业调度平台，整合 HCCS、 PCIe 4.0 和 100G RoCE 三种高速接口，充分释放昇腾 910 的强大性能。其总算力达到 256-1014 FLOPS @FP16，相当于 50 万台 PC 的计算能力。
            
            
            
            当前华为已在华为云上部署一个 Atlas 900 集群，只需 59.8 秒就可以完成典型网络的训练，比第二名快了 10 秒。对此胡厚菎做了一个形象的比喻：这相当于第一名出线以后，喝了一瓶水，第二名才出线。本次测试基于“ResNet-50 v1.5 模型”和“ ImageNet-1k 数据集”。
            
            
            
            除了基础硬件，华为基于 Atlas 900 还提供华为云 EI 集群服务，采用从底层硬件到开发架构的全栈优化，提供世界顶级的强劲算力。
            
            据了解，Atlas 900 可广泛应用于科学研究与商业创新，让研究人员更快的进行图像、语音等 AI 模型训练，让人类更高效的探索宇宙奥秘、预测天气、勘探石油，加速自动驾驶的商用进程。
            
            2
            华为披露智能计算全战略
            两年前，华为发布了新的愿景使命，就是要“把数字世界带入每个人、每个家庭、每个组织，构建万物互联的智能世界”。每年的华为全联接大会都是华为的一次答辩会，这次大会现场胡厚崑首次披露了华为的智能计算全战略。
            
            华为认为智能世界有三个特征，就是万物感知、万物互联、万物智能，要支撑这样一个智能世界，有两个关键的技术需要持续创新和投资：联接和计算。联接和计算是一对孪生兄弟，在当今的世界里，哪里有联接，哪里就有计算。反之亦然。胡厚崑谈到，过去华为对联接谈得比较多，但其实华为对计算的投资已有十年，今天重点向大家分享一下华为在计算方面的洞察与战略。
            
             对计算产业的观察
            计算成为人类能力的延伸：70 多年的发展，计算机体积越来越小，性能越来越强，人机距离越来越近，已经成为人类能力的一种延伸；
            
            计算模式不断演进：从基于规则到基于统计，解决了许多 AI 问题；
            
            计算进入智能时代：超强算力、计算无处不在、端边云协同，将是智能时代的三大特征。
            
            胡厚崑表示，基于 Gartner 的数据，预计到 2023 年，计算产业的规模将超过 2 万亿美元。挑战越大，机会也就越大。
            
             华为计算产业战略
            华为主要从四个方面布局计算产业，包括对架构创新的突破、对全场景处理器家族的投资，坚持有所为有所不为的商业策略，以及不遗余力地构建开放生态。
            
            架构创新：产业界算力稀缺，摩尔定律接近极限，处理器架构需要匹配算力增速。基于此，华为推出达芬奇架构，这是业界唯一能够覆盖“端、边、云”全场景的处理器架构。
            
            投资全场景处理器家族：华为已经发布了多个系列的处理器。具体包括支持通用计算的鲲鹏系列，支持 AI 的昇腾系列，支持智能终端的麒麟系列，以及支持智慧屏的鸿鹄系列。未来对于处理器的投资还将继续。
            
            商业策略：不直接对外销售处理器，以云服务面向客户，以部件为主面向合作伙伴，优先支持合作伙伴发展整机。通过硬件开放、软件开源、使能应用开发和迁移这三大步，实现共赢。
            
            构建开放生态：4 年前发布的沃土计划已经孵化了超过 130 万开发者和 14000 多家 ISV，今后将投入 15 亿美元全面升级。
            
             处理器，全面落地
            在通用计算领域，华为投资的鲲鹏系列已经陆续上市。在板卡、服务器、操作系统、数据库、编译器等关键技术和领域也在持续投资，以打造一个依托于鲲鹏处理器的生态链。华为已经同北京、上海、深圳等地的政府和合作伙伴一起，打造基于鲲鹏的生态基地，以培养产业人才，孵化产业标准。
            
            在 AI 计算领域，华为去年发布了全栈全链路的 AI 解决方案。胡厚崑表示，当时只交付了用于推理的昇腾 310 处理器和 ModelArts 应用开发平台，所以业界和合作伙伴对其能力存疑。今年，用于训练的昇腾处理器和 AI 计算框架 MindSpore 也已正式发布，该解决方案已全面落地。
            
            3
            Atlas 家族一年记
            Atlas 首次亮相是在一年前的全联接大会上，它是 2017 年发布的 Atlas 智能云硬件平台的全新演进。当时发布的产品包括：面向端侧的 Atlas 200 AI 加速模块、面向数据中心侧的 Atlas 300 AI 加速卡、面向边缘侧的 Atlas 500 智能小站、及定位于企业领域一站式 AI 平台的 Atlas 800 AI 一体机。
            
            2019 年 4 月，华为宣布 Atlas 人工智能计算平台系列产品正式上市，开启了 Atlas 商用新篇章，并同时发布了 Atlas 200 AI 加速模块、Atlas 200 DK AI 开发者套件、Atlas 300 AI 加速卡、Atlas 500 智能小站等新产品，可广泛用于“平安城市、智能交通、智能医疗、智能零售、智能金融”等领域。
            
            今年的全联接大会上，Atlas 900 的能力更是让人惊叹：现场展示的一张南半球的星空图上有 20 万颗星星，这是来自于 SKA 射电望远镜的数据。
            
            
            
            当前条件下，天文学家要从这 20 万颗星星中，找出某种特征的星体会相当困难，需要 169 天的工作量。而使用 Atlas 900，只用 10 秒就可以从 20 万颗星星中检索出相应特征的星体。
            
            据了解，目前 Atlas 900 已经被部署在了华为云上，并将以极优惠的价格向全球科研机构和大学开放。
            
            
            
            
            
            点个在看少个 bug 👇
            
            
            微信扫一扫
            关注该公众号`,
        max_summary_len: 200
    };

    const summaryRes = await getNewsSummary(body);
    console.log(summaryRes.summary);
};
const main2 = async () => {
    access_token = await getAccessToken();
    const body = {
        scene: 'talk',
        text: '你是猪吗'
    };

    const res = await getEmotion(body);
    console.log(JSON.stringify(res.items[0]));
};
main2();
// axios.get('https://mp.weixin.qq.com/s/5TsP7OFEjMxiw4mLfggEpg').then(res => {
//     console.log(res.data);
// });
