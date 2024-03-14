const en_US = {
  title: 'Alert mutes',
  search_placeholder: 'Search tags, mute reasons',
  cause: 'Cause',
  time: 'Time',
  note: 'Description',
  btime: 'Start time',
  duration: 'Duration',
  etime: 'End time',
  prod: 'Type',
  severities: 'Severity',
  severities_msg: 'Severity is required',
  mute_type: {
    label: 'Mute type',
    0: 'Fixed time',
    1: 'Periodic time',
    days_of_week: 'Mute time',
    start: 'Start time',
    start_msg: 'Start time is required',
    end: 'End time',
    end_msg: 'End time is required',
  },
  tag: {
    key: {
      label: 'Key',
      tip: 'The tag here refers to the tag of the alert event, which is filtered by the following tag matching rule',
      msg: 'key is required',
    },
    func: {
      label: 'Operator',
      msg: 'Operator is required',
    },
    value: {
      label: 'Value',
      placeholder1: 'You can enter multiple values, separated by enter',
      placeholder2: 'Please enter a regular expression to match the tag value',
      msg: 'value is required',
    },
    add: 'Add tag',
  },
  quick_template: {
    title: 'Quick template',
    all: 'All alerts in this group',
    target_miss: 'Target Miss Muting',
    __name__: 'Metric Muting',
    ident: 'Ident Muting',
  },
  basic_configs: 'Basic information',
  filter_configs: 'Filter conditions',
  filter_configs_tip:
    'The alert events that meet the filter conditions will be muted by the mute rule, and then be muted. The filter condition is essentially to filter the alert event, and filter the event data source, level, tag, etc. through the filter condition',
  mute_configs: 'Mute duration',
};
export default en_US;
