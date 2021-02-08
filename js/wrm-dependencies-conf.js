const mappings = new Map();

/**
 * External modules - are amd or es6 modules that exist outside this source code. e.g from JIRA or aui. These
 * modules will be required using window.require (which in JIRA land means almond).
 */
mappings
  .set('jquery', {
    dependency: 'com.atlassian.plugins.jquery:jquery',
    import: {
      amd: 'jquery',
      var: 'jQuery',
    },
  })
  .set('aui/flag', {
    dependency: 'com.atlassian.auiplugin:aui-flag',
    import: {
      amd: 'aui/flag',
      var: 'AJS.flag',
    },
  })
  .set('jira/util/events', {
    dependency: 'jira.webresources:jira-events',
    import: {
      var: "require('jira/util/events')",
      amd: 'jira/util/events',
    },
  })
  .set('jira/util/events/types', {
    dependency: 'jira.webresources:jira-events',
    import: {
      var: "require('jira/util/events/types')",
      amd: 'jira/util/events/types',
    },
  })
  .set('jira/util/events/reasons', {
    dependency: 'jira.webresources:jira-events',
    import: {
      var: "require('jira/util/events/reasons')",
      amd: 'jira/util/events/reasons',
    },
  })
  .set('jira/dialog/dialog-register', {
    dependency: 'jira.webresources:jira-dialog-core',
    import: {
      var: "require('jira/dialog/dialog-register')",
      amd: 'jira/dialog/dialog-register',
    },
  })
  .set('jira/dialog/form-dialog', {
    dependency: 'jira.webresources:dialogs',
    import: {
      var: "require('jira/dialog/form-dialog')",
      amd: 'jira/dialog/form-dialog',
    },
  })
  .set('jira/dialog/dialog-util', {
    dependency: 'jira.webresources:jira-dialog-config',
    import: {
      var: "require('jira/dialog/dialog-util')",
      amd: 'jira/dialog/dialog-util',
    },
  })
  .set('jira/util/urls', {
    dependency: 'jira.webresources:jira-urlhelpers',
    import: {
      var: "require('jira/util/urls')",
      amd: 'jira/util/urls',
    },
  })
  .set('wrm/require', {
    dependency: 'com.atlassian.plugins.atlassian-plugins-webresource-rest:web-resource-manager',
    import: {
      amd: 'wrm/require',
      var: 'WRM.require',
    },
  })
  .set('wrm/data', {
    dependency: 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:data',
    import: {
      amd: 'wrm/data',
      var: 'WRM.data',
    },
  })
  .set('wrm/context-path', {
    dependency: 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:context-path',
    import: {
      amd: 'wrm/context-path',
      var: 'AJS.contextPath',
    },
  })
  .set('jira/viewissue/tabs', {
    dependency: 'jira.webresources:viewissue',
    import: {
      amd: 'jira/viewissue/tabs',
      var: "require('jira/viewissue/tabs')",
    },
  })
  .set('wrm/format', {
    dependency: 'com.atlassian.plugins.atlassian-plugins-webresource-plugin:format',
    import: {
      var: 'require("wrm/format")',
      amd: 'wrm/format',
    },
  })
  .set('jira/api/projects', {
    dependency: 'com.atlassian.jira.jira-projects-plugin:projects-api',
    import: {
      var: 'require("jira/api/projects")',
      amd: 'jira/api/projects',
    },
  })
  .set('jira/moment', {
    dependency: 'jira.webresources:momentjs',
    import: {
      var: 'require("jira/moment")',
      amd: 'jira/moment',
    },
  });

module.exports = mappings;
