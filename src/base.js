/**
 * Defines the base color scheme.
 *
 * @return {*} Copy of the base color scheme.
 */
const base = () => {
  return {
    colors: {
      'activityBar.activeBorder': 0,
      'activityBar.background': 0,
      'activityBar.border': 0.0392156862745098,
      'activityBar.foreground': 0.7490196078431373,
      'activityBar.inactiveForeground': 0.23921568627450981,
      'activityBarBadge.background': 0.3764705882352941,
      'badge.background': 0.10196078431372549,
      'badge.foreground': 0.7490196078431373,
      'button.background': 0.09411764705882353,
      'button.hoverBackground': 0.12156862745098039,
      'checkbox.border': 0.0392156862745098,
      'dart.closingLabels': 0.0784313725490196,
      'debugIcon.breakpointCurrentStackframeForeground': 0.5686274509803921,
      'debugIcon.breakpointDisabledForeground': 0.5686274509803921,
      'debugIcon.breakpointForeground': 0.5686274509803921,
      'debugIcon.breakpointStackframeForeground': 0.5686274509803921,
      'debugIcon.breakpointUnverifiedForeground': 0.5686274509803921,
      'debugIcon.continueForeground': 0.5686274509803921,
      'debugIcon.disconnectForeground': 0.5686274509803921,
      'debugIcon.pauseForeground': 0.5686274509803921,
      'debugIcon.restartForeground': 0.5686274509803921,
      'debugIcon.startForeground': 0.5686274509803921,
      'debugIcon.stepBackForeground': 0.5686274509803921,
      'debugIcon.stepIntoForeground': 0.5686274509803921,
      'debugIcon.stepOutForeground': 0.5686274509803921,
      'debugIcon.stepOverForeground': 0.5686274509803921,
      'debugIcon.stopForeground': 0.5686274509803921,
      'debugToolBar.background': 0,
      'dropdown.background': 0,
      'dropdown.foreground': 0.5686274509803921,
      'editor.background': 0,
      'editor.findMatchBackground': 0,
      'editor.findMatchBorder': 0.5019607843137255,
      'editor.findMatchHighlightBackground': 0,
      'editor.findMatchHighlightBorder': 0.23921568627450981,
      'editor.foldBackground': 0,
      'editor.foreground': 0.7019607843137254,
      'editor.hoverHighlightBackground': 0.058823529411764705,
      'editor.lineHighlightBackground': 0.025,
      'editor.selectionBackground': 0.058823529411764705,
      'editorBracketMatch.background': 0,
      'editorBracketMatch.border': 0.23921568627450981,
      'editorCursor.foreground': 0.7019607843137254,
      'editorError.foreground': 0.3607843137254902,
      'editorGroup.border': 0.0392156862745098,
      'editorGroupHeader.tabsBackground': 0,
      'editorGroupHeader.tabsBorder': 0.0392156862745098,
      'editorIndentGuide.activeBackground': 0.24,
      'editorIndentGuide.background': 0.08,
      'editorInfo.foreground': 0.3607843137254902,
      'editorLightBulb.foreground': 0.5686274509803921,
      'editorLineNumber.activeForeground': 0.25882352941176473,
      'editorLineNumber.foreground': 0.10196078431372549,
      'editorLink.activeForeground': 0.7490196078431373,
      'editorOverviewRuler.border': 0.0392156862745098,
      'editorRuler.foreground': 0.08,
      'editorSuggestWidget.foreground': 0.3764705882352941,
      'editorSuggestWidget.highlightForeground': 0.7490196078431373,
      'editorWarning.foreground': 0.3607843137254902,
      'editorWhitespace.foreground': 0.10196078431372549,
      'editorWidget.background': 0,
      'focusBorder': 0,
      'gitDecoration.ignoredResourceForeground': 0.154,
      'gitDecoration.addedResourceForeground': 0.752,
      'gitDecoration.modifiedResourceForeground': 0.752,
      'gitDecoration.deletedResourceForeground': 0.3764705882352941,
      'gitDecoration.untrackedResourceForeground': 0.752,
      'gitDecoration.conflictingResourceForeground': 0.752,
      'gitDecoration.submoduleResourceForeground': 0.3764705882352941,
      'icon.foreground': 0.2196078431372549,
      'input.background': 0,
      'input.border': 0,
      'input.foreground': 0.5686274509803921,
      'list.activeSelectionBackground': 0,
      'list.activeSelectionForeground': 0.7490196078431373,
      'list.filterMatchBackground': 0.10196078431372549,
      'list.filterMatchBorder': 0,
      'list.focusBackground': 0.0392156862745098,
      'list.highlightForeground': 0.6,
      'list.hoverBackground': 0,
      'list.inactiveSelectionBackground': 0,
      'list.inactiveSelectionForeground': 0.7490196078431373,
      'listFilterWidget.background': 0,
      'listFilterWidget.outline': 0.23921568627450981,
      'menu.background': 0,
      'menu.foreground': 0.5686274509803921,
      'menubar.selectionBackground': 0,
      'panel.border': 0.0392156862745098,
      'panelTitle.activeBorder': 0,
      'panelTitle.activeForeground': 0.7490196078431373,
      'panelTitle.inactiveForeground': 0.23921568627450981,
      'peekView.border': 0.2196078431372549,
      'peekViewEditor.background': 0,
      'peekViewEditor.matchHighlightBackground': 0,
      'peekViewEditor.matchHighlightBorder': 0.23921568627450981,
      'peekViewEditorGutter.background': 0,
      'peekViewResult.background': 0.023529411764705882,
      'peekViewResult.fileForeground': 0.6,
      'peekViewResult.lineForeground': 0.23921568627450981,
      'peekViewResult.matchHighlightBackground': 0.058823529411764705,
      'peekViewResult.selectionBackground': 0,
      'peekViewResult.selectionForeground': 0.7490196078431373,
      'pickerGroup.foreground': 0.615686274509804,
      'scrollbar.shadow': 0,
      'scrollbarSlider.activeBackground': 0.058823529411764705,
      'scrollbarSlider.background': 0.058823529411764705,
      'scrollbarSlider.hoverBackground': 0.058823529411764705,
      'settings.checkboxBorder': 0.0392156862745098,
      'settings.dropdownBorder': 0.0392156862745098,
      'settings.modifiedItemIndicator': 0.2196078431372549,
      'settings.textInputBorder': 0.0392156862745098,
      'sideBar.background': 0,
      'sideBar.border': 0.0392156862745098,
      'sideBar.foreground': 0.3764705882352941,
      'sideBarSectionHeader.background': 0,
      'sideBarSectionHeader.border': 0.0392156862745098,
      'statusBar.background': 0,
      'statusBar.border': 0.0392156862745098,
      'statusBar.debuggingBackground': 0,
      'statusBar.debuggingBorder': 0.0392156862745098,
      'statusBar.debuggingForeground': 0.5686274509803921,
      'statusBar.foreground': 0.5686274509803921,
      'statusBar.noFolderBackground': 0,
      'statusBar.noFolderBorder': 0.0392156862745098,
      'statusBar.noFolderForeground': 0.5686274509803921,
      'statusBarItem.activeBackground': 0,
      'statusBarItem.hoverBackground': 0,
      'symbolIcon.arrayForeground': 0.5686274509803921,
      'symbolIcon.booleanForeground': 0.5686274509803921,
      'symbolIcon.classForeground': 0.5686274509803921,
      'symbolIcon.colorForeground': 0.5686274509803921,
      'symbolIcon.constantForeground': 0.5686274509803921,
      'symbolIcon.constructorForeground': 0.5686274509803921,
      'symbolIcon.enumeratorForeground': 0.5686274509803921,
      'symbolIcon.enumeratorMemberForeground': 0.5686274509803921,
      'symbolIcon.eventForeground': 0.5686274509803921,
      'symbolIcon.fieldForeground': 0.5686274509803921,
      'symbolIcon.fileForeground': 0.5686274509803921,
      'symbolIcon.folderForeground': 0.5686274509803921,
      'symbolIcon.functionForeground': 0.5686274509803921,
      'symbolIcon.interfaceForeground': 0.5686274509803921,
      'symbolIcon.keyForeground': 0.5686274509803921,
      'symbolIcon.keywordForeground': 0.5686274509803921,
      'symbolIcon.methodForeground': 0.5686274509803921,
      'symbolIcon.moduleForeground': 0.5686274509803921,
      'symbolIcon.namespaceForeground': 0.5686274509803921,
      'symbolIcon.nullForeground': 0.5686274509803921,
      'symbolIcon.numberForeground': 0.5686274509803921,
      'symbolIcon.objectForeground': 0.5686274509803921,
      'symbolIcon.operatorForeground': 0.5686274509803921,
      'symbolIcon.packageForeground': 0.5686274509803921,
      'symbolIcon.propertyForeground': 0.5686274509803921,
      'symbolIcon.referenceForeground': 0.5686274509803921,
      'symbolIcon.snippetForeground': 0.5686274509803921,
      'symbolIcon.stringForeground': 0.5686274509803921,
      'symbolIcon.structForeground': 0.5686274509803921,
      'symbolIcon.textForeground': 0.5686274509803921,
      'symbolIcon.typeParameterForeground': 0.5686274509803921,
      'symbolIcon.unitForeground': 0.5686274509803921,
      'symbolIcon.variableForeground': 0.5686274509803921,
      'tab.activeForeground': 0.7490196078431373,
      'tab.border': 0,
      'tab.inactiveBackground': 0,
      'tab.inactiveForeground': 0.23921568627450981,
      'terminal.ansiBrightBlack': 0.1,
      'terminal.ansiBrightBlue': 0.2,
      'terminal.ansiBrightGreen': 0.3,
      'terminal.ansiBrightCyan': 0.4,
      'terminal.ansiBrightRed': 0.5,
      'terminal.ansiBrightMagenta': 0.6,
      'terminal.ansiBrightYellow': 0.7,
      'terminal.ansiBrightWhite': 1,
      'terminal.ansiBlack': 0,
      'terminal.ansiBlue': 0.2,
      'terminal.ansiGreen': 0.3,
      'terminal.ansiCyan': 0.4,
      'terminal.ansiRed': 0.5,
      'terminal.ansiMagenta': 0.6,
      'terminal.ansiYellow': 0.7,
      'terminal.ansiWhite': 0.8,
      'terminal.background': 0,
      'terminal.foreground': 0.6,
      'terminalCursor.background': 0,
      'terminalCursor.foreground': 0.7019607843137254,
      'textLink.activeForeground': 1,
      'textLink.foreground': 1,
      'textPreformat.foreground': 0.5686274509803921,
      'titleBar.activeBackground': 0,
      'titleBar.activeForeground': 0.5686274509803921,
      'titleBar.border': 0.0392156862745098,
      'titleBar.inactiveBackground': 0,
      'tree.indentGuidesStroke': 0.0784313725490196,
      'window.activeBorder': 0.0392156862745098,
    },
    tokenColors: [
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground: 0.7019607843137254,
        },
      },
      {
        scope: 'comment, punctuation.definition.comment',
        settings: {
          foreground: 0.1803921568627451,
        },
      },
      {
        scope:
          'punctuation.definition.string, punctuation.definition.variable, punctuation.definition.parameters, punctuation.definition.array',
        settings: {
          foreground: 0.7019607843137254,
        },
      },
      {
        scope: 'none',
        settings: {
          foreground: 0.7019607843137254,
        },
      },
      {
        scope: 'keyword.operator',
        settings: {
          foreground: 0.7019607843137254,
        },
      },
      {
        scope: 'keyword',
        settings: {
          foreground: 0.4196078431372549,
        },
      },
      {
        scope: 'variable',
        settings: {
          foreground: 0.4392156862745098,
        },
      },
      {
        scope:
          'entity.name.function, meta.require, support.function.any-method',
        settings: {
          foreground: 0.3764705882352941,
        },
      },
      {
        scope: 'support.class, entity.name.class, entity.name.type.class',
        settings: {
          foreground: 0.6,
        },
      },
      {
        scope: 'meta.class',
        settings: {
          foreground: 0.9607843137254902,
        },
      },
      {
        scope: 'keyword.other.special-method',
        settings: {
          foreground: 0.3764705882352941,
        },
      },
      {
        scope: 'storage',
        settings: {
          foreground: 0.4196078431372549,
        },
      },
      {
        scope: 'support.function',
        settings: {
          foreground: 0.5019607843137255,
        },
      },
      {
        scope: 'string, constant.other.symbol, entity.other.inherited-class',
        settings: {
          foreground: 0.5411764705882353,
        },
      },
      {
        scope: 'constant.numeric',
        settings: {
          foreground: 0.5686274509803921,
        },
      },
      {
        scope: 'none',
        settings: {
          foreground: 0.5686274509803921,
        },
      },
      {
        scope: 'none',
        settings: {
          foreground: 0.5686274509803921,
        },
      },
      {
        scope: 'constant',
        settings: {
          foreground: 0.5686274509803921,
        },
      },
      {
        scope: 'entity.name.tag',
        settings: {
          foreground: 0.4392156862745098,
        },
      },
      {
        scope: 'entity.other.attribute-name',
        settings: {
          foreground: 0.5686274509803921,
        },
      },
      {
        scope: 'entity.other.attribute-name.id, punctuation.definition.entity',
        settings: {
          foreground: 0.3764705882352941,
        },
      },
      {
        scope: 'meta.selector',
        settings: {
          foreground: 0.4196078431372549,
        },
      },
      {
        scope: 'none',
        settings: {
          foreground: 0.5686274509803921,
        },
      },
      {
        scope:
          'markup.heading punctuation.definition.heading, entity.name.section',
        settings: {
          foreground: 0.3764705882352941,
          fontStyle: '',
        },
      },
      {
        scope: 'keyword.other.unit',
        settings: {
          foreground: 0.5686274509803921,
        },
      },
      {
        scope: 'markup.bold, punctuation.definition.bold',
        settings: {
          foreground: 0.6,
          fontStyle: 'bold',
        },
      },
      {
        scope: 'markup.italic, punctuation.definition.italic',
        settings: {
          foreground: 0.4196078431372549,
          fontStyle: 'italic',
        },
      },
      {
        scope: 'markup.raw.inline',
        settings: {
          foreground: 0.5411764705882353,
        },
      },
      {
        scope: 'string.other.link, punctuation.definition.string.end.markdown',
        settings: {
          foreground: 0.4392156862745098,
        },
      },
      {
        scope: 'meta.link',
        settings: {
          foreground: 0.5686274509803921,
        },
      },
      {
        scope: 'markup.list',
        settings: {
          foreground: 0.4392156862745098,
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: 0.5686274509803921,
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          foreground: 0.7019607843137254,
        },
      },
      {
        scope: 'markup.inserted',
        settings: {
          foreground: 0.5411764705882353,
        },
      },
      {
        scope: 'markup.deleted',
        settings: {
          foreground: 0.4392156862745098,
        },
      },
      {
        scope: 'markup.changed',
        settings: {
          foreground: 0.4196078431372549,
        },
      },
      {
        scope: 'constant.other.color',
        settings: {
          foreground: 0.5019607843137255,
        },
      },
      {
        scope: 'string.regexp',
        settings: {
          foreground: 0.5019607843137255,
        },
      },
      {
        scope: 'constant.character.escape',
        settings: {
          foreground: 0.5019607843137255,
        },
      },
      {
        scope: 'punctuation.section.embedded, variable.interpolation',
        settings: {
          foreground: 0.4196078431372549,
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          foreground: 0.9607843137254902,
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          foreground: 0,
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          foreground: 0.9607843137254902,
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          foreground: 0.9607843137254902,
        },
      },
    ],
  };
};

module.exports = base;
