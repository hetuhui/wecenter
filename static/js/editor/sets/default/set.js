// ----------------------------------------------------------------------------// markItUp!// ----------------------------------------------------------------------------// Copyright (C) 2008 Jay Salvat// http://markitup.jaysalvat.com/// ----------------------------------------------------------------------------myMarkdownSettings = {    nameSpace:          'markdown', // Useful to prevent multi-instances CSS conflict    previewParser:  function(content){        var html = Markdown(content);        return html;    },    previewInElement : '#markItUpPreviewFrames',    onShiftEnter:       {keepDefault:false, openWith:'\n\n'},    markupSet: [        {name:_t('粗体'), key:"B", openWith:'**', closeWith:'**', offset:2},        {name:_t('斜体'), key : "I", openWith : '*', closeWith : '*', offset:1},        {separator:'---------------' },                {name:_t('引用'), openWith:'> ', offset:2},        {name:_t('代码'), openWith:'{{{\n', closeWith:'\n}}}', addline:1},        {separator:'---------------' },        {name:_t('普通列表'), openWith:'- ', offset:2 },        {name:_t('数字列表'), openWith:function(markItUp) {            return markItUp.line+'. ';        }, offset:3},        {separator:'---------------' },        {name:_t('图片'), key:"P", openWith:function(){$.uploadPicture()}},        {name:_t('视频'), key:"Y", openWith:function(){$.uploadVideo()}},        {separator:'---------------'},        {name:_t('大标题'), key : "1", openWith:'\n## ', offset:3, addline:1},        {name:_t('小标题'), key : "2", openWith : '\n### ', offset:4, addline:1},        {separator:'---------------'},        {name : _t('预览模式'), openWith:function(){            $('.markItUpButton11 a').toggleClass('cur');            $('#markItUpPreviewFrame').toggle();            $.cookie('data_editor_preview', $('.markItUpButton11 a').hasClass('cur'));        }},         {name : _t('清空'), openWith:function(){            $('#advanced_editor').val('');            $('#markItUpPreviewFrames').html('');        }},        {name:'ToggleMode', call:'toggleMode', className:"toggleMode"}    ]}// mIu nameSpace to avoid conflict.miu = {    markdownTitle: function(markItUp, char) {        heading = '';        n = $.trim(markItUp.selection||markItUp.placeHolder).length;        for(i = 0; i < n; i++) {            heading += char;        }        return '\n'+heading+'\n';    }}