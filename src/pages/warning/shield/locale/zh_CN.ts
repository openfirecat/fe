import { add } from 'lodash';

const zh_CN = {
  title: '屏蔽规则',
  search_placeholder: '搜索标签、屏蔽原因',
  datasource_type: '数据源类型',
  datasource_id: '数据源',
  cause: '屏蔽原因',
  time: '屏蔽时间',
  note: '规则说明',
  btime: '屏蔽开始时间',
  duration: '屏蔽时长',
  etime: '屏蔽结束时间',
  prod: '监控类型',
  severities: '屏蔽事件等级',
  severities_msg: '屏蔽事件等级不能为空',
  mute_type: {
    label: '屏蔽时间类型',
    0: '固定时间',
    1: '周期时间',
    days_of_week: '屏蔽时间',
    start: '开始时间',
    start_msg: '开始时间不能为空',
    end: '结束时间',
    end_msg: '结束时间不能为空',
  },
  tag: {
    key: {
      label: '屏蔽事件标签Key',
      tip: '这里的标签是指告警事件的标签，通过如下标签匹配规则过滤告警事件',
      msg: 'key不能为空',
    },
    func: {
      label: '运算符',
      msg: '运算符不能为空',
    },
    value: {
      label: '标签Value',
      placeholder1: '可以输入多个值，用回车分割',
      placeholder2: '请输入正则表达式匹配标签value',
      msg: 'value不能为空',
    },
    add: '添加标签',
  },
  quick_template: {
    title: '快捷模板',
    all: '本组全部告警屏蔽',
    target_miss: '机器失联屏蔽',
    __name__: '屏蔽 Metric',
    ident: '屏蔽 Ident',
  },
  basic_configs: '基本信息',
  filter_configs: '筛选条件',
  filter_configs_tip: '符合筛选条件的告警事件会命中屏蔽规则，进而被屏蔽。筛选条件本质就是对告警事件的筛选，通过事件的数据源、等级、标签等信息进行筛选',
  mute_configs: '屏蔽时长',
};
export default zh_CN;
