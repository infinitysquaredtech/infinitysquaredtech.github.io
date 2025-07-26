(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"defaultMenu":["fullscreen","mute","rotation"],"scrollBarColor":"#000000","backgroundColorRatios":[0],"layout":"absolute","lockedOrientation":"landscape","id":"rootPlayer","creationPolicy":"inAdvance","data":{"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"volume":1,"speechOnTooltip":false,"rate":1},"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt","es":"locale/es.txt"},"defaultLocale":"en","history":{},"name":"Player18462"},"backgroundColor":["#FFFFFF"],"minHeight":0,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_729BB4CE_468A_6B9D_41D0_955C3E306CB4], 'gyroscopeAvailable'); if(!this.get('fullscreenAvailable')) { [this.IconButton_7767DC39_469A_5A86_41CB_4A3374AF41B5].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","minWidth":0,"gap":10,"buttonToggleFullscreen":"this.IconButton_7767DC39_469A_5A86_41CB_4A3374AF41B5","propagateClick":false,"scripts":{"getMediaByName":TDV.Tour.Script.getMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setValue":TDV.Tour.Script.setValue,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setLocale":TDV.Tour.Script.setLocale,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"clone":TDV.Tour.Script.clone,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"isPanorama":TDV.Tour.Script.isPanorama,"openLink":TDV.Tour.Script.openLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"initQuiz":TDV.Tour.Script.initQuiz,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getKey":TDV.Tour.Script.getKey,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPixels":TDV.Tour.Script.getPixels,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showWindow":TDV.Tour.Script.showWindow,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupImage":TDV.Tour.Script.showPopupImage,"getMainViewer":TDV.Tour.Script.getMainViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"historyGoBack":TDV.Tour.Script.historyGoBack,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"executeJS":TDV.Tour.Script.executeJS,"init":TDV.Tour.Script.init,"shareSocial":TDV.Tour.Script.shareSocial,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"existsKey":TDV.Tour.Script.existsKey,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"registerKey":TDV.Tour.Script.registerKey,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleVR":TDV.Tour.Script.toggleVR,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"downloadFile":TDV.Tour.Script.downloadFile,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"disableVR":TDV.Tour.Script.disableVR,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"enableVR":TDV.Tour.Script.enableVR,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"createTween":TDV.Tour.Script.createTween,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizStart":TDV.Tour.Script.quizStart,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlays":TDV.Tour.Script.getOverlays,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMapLocation":TDV.Tour.Script.setMapLocation,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"playAudioList":TDV.Tour.Script.playAudioList,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"cloneBindings":TDV.Tour.Script.cloneBindings,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"quizFinish":TDV.Tour.Script.quizFinish,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"translate":TDV.Tour.Script.translate,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"mixObject":TDV.Tour.Script.mixObject,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList},"scrollBarMargin":2,"mediaActivationMode":"button","watermark":false,"height":"100%","width":"100%","hash": "8604aea8614bf031bd8e0a478edb369738125fb5aef83d7803d352c18be3ad2f", "definitions": [{"firstTransitionDuration":0,"class":"ViewerArea","progressBarBorderSize":0,"subtitlesFontFamily":"Arial","subtitlesFontColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","progressBorderRadius":2,"playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","toolTipFontFamily":"Arial","subtitlesTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"progressRight":"33%","data":{"name":"Main Viewer"},"progressLeft":"33%","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColorDirection":"horizontal","subtitlesFontSize":"3vmin","playbackBarHeadShadowOpacity":0.7,"progressBarBorderColor":"#000000","subtitlesBottom":50,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"playbackBarLeft":0,"playbackBarHeadHeight":15,"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipPaddingTop":4,"playbackBarProgressBorderColor":"#000000","subtitlesGap":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowColor":"#000000","subtitlesBackgroundColor":"#000000","toolTipShadowColor":"#333138","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"id":"MainViewer","doubleClickAction":"none","vrPointerColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipPaddingLeft":6,"playbackBarHeadBorderColor":"#000000","vrPointerSelectionTime":2000,"minHeight":50,"toolTipBorderColor":"#767676","progressBorderColor":"#000000","minWidth":100,"toolTipFontColor":"#606060","playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingRight":6,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderSize":0,"subtitlesTextShadowOpacity":1,"propagateClick":false,"progressBarBackgroundColor":["#3399FF"],"playbackBarBottom":5,"progressBackgroundColor":["#000000"],"subtitlesTextShadowVerticalLength":1,"progressBottom":10,"toolTipPaddingBottom":4,"playbackBarBackgroundOpacity":1,"vrPointerSelectionColor":"#FF6600","progressHeight":2,"playbackBarBackgroundColor":["#FFFFFF"],"width":"100%","playbackBarHeight":10,"subtitlesTop":0,"progressBorderSize":0,"playbackBarHeadWidth":6,"progressBarBorderRadius":2,"height":"100%","surfaceReticleColor":"#FFFFFF"},{"scrollBarColor":"#000000","backgroundColorRatios":[1],"layout":"absolute","id":"Container_0E8E0CA1_4685_BB87_41C9_036021B79DBE","creationPolicy":"inAdvance","left":"15%","backgroundColor":["#000000"],"data":{"name":"Container"},"right":"15%","overflow":"scroll","minHeight":20,"minWidth":20,"gap":10,"propagateClick":false,"top":"15%","scrollBarMargin":2,"bottom":"15%","children":["this.Image_0A1B6315_468A_6E8F_41C4_C2DCFE6ED8B4","this.Image_0FA82578_468A_AA85_41D1_148E25AE1347","this.IconButton_0F4D2F79_468E_B687_41AB_86A57B660C2A"],"class":"Container"},{"iconURL":"skin/IconButton_7767DC39_469A_5A86_41CB_4A3374AF41B5.png","id":"IconButton_7767DC39_469A_5A86_41CB_4A3374AF41B5","maxHeight":512,"data":{"name":"fullscreen"},"maxWidth":512,"right":"2.5%","transparencyActive":true,"verticalAlign":"bottom","minHeight":1,"minWidth":1,"height":"10%","mode":"toggle","propagateClick":false,"backgroundOpacity":0,"pressedIconURL":"skin/IconButton_7767DC39_469A_5A86_41CB_4A3374AF41B5_pressed.png","width":"5%","bottom":"3%","class":"IconButton","horizontalAlign":"right"},{"height":"20%","backgroundColorRatios":[],"id":"IconButton_729BB4CE_468A_6B9D_41D0_955C3E306CB4","left":"11%","backgroundColor":[],"data":{"name":"joystick"},"transparencyActive":true,"verticalAlign":"middle","minHeight":1,"minWidth":1,"propagateClick":false,"backgroundOpacity":0.3,"bottom":"15%","iconURL":"skin/IconButton_729BB4CE_468A_6B9D_41D0_955C3E306CB4.png","width":"10%","interactionEnabled":false,"cursor":"default","class":"IconButton","horizontalAlign":"center"},{"class":"FadeOutEffect","id":"effect_0CE3DF56_468E_568D_41B3_5A31F681E4E1","duration":500},{"environmentIntensity":0.5,"antialiasingLevel":0.3,"surfaceSelectionCoef":2,"camera":"this.cam_5D7B313F_45BA_6AFB_41A9_8E358EF0630E","surfaceReticleMaxRadius":50,"id":"model_5C37CF78_45BA_5686_41D0_C2AA1D02E277","surfaceReticleRadius":0.02,"sphericalHarmonicsMaxDegree":3,"surfaceReticleMinRadius":15,"backgroundColor":"#333333","objects":[],"class":"Model3D","model":"this.res_5C378F78_45BA_5686_41BF_8915C4CE0C73","lights":["this.light_5D7AE13F_45BA_6AFB_41A5_1B10315D6AA2"],"floorRadius":15.16,"thumbnailUrl":"media/model_5C37CF78_45BA_5686_41D0_C2AA1D02E277_t.jpg","label":trans('model_5C37CF78_45BA_5686_41D0_C2AA1D02E277.label'),"data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"keepModel3DLoadedWithoutLocation":true,"label":"1bhk_b"}},{"id":"Image_0FA82578_468A_AA85_41D1_148E25AE1347","left":"0%","data":{"name":"image2"},"verticalAlign":"middle","minHeight":1,"url":trans('Image_0FA82578_468A_AA85_41D1_148E25AE1347.url'),"minWidth":1,"propagateClick":false,"top":"24.99%","backgroundOpacity":0,"width":"50%","height":"50%","scaleMode":"fit_inside","class":"Image","horizontalAlign":"center"},{"class":"Model3DPlayer","id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer"},{"class":"PlayList","id":"mainPlayList","items":[{"media":"this.model_5C37CF78_45BA_5686_41D0_C2AA1D02E277","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","class":"Model3DPlayListItem","player":"this.MainViewerModel3DPlayer"}]},{"id":"Image_0A1B6315_468A_6E8F_41C4_C2DCFE6ED8B4","data":{"name":"image1"},"right":"0%","verticalAlign":"middle","minHeight":1,"url":trans('Image_0A1B6315_468A_6E8F_41C4_C2DCFE6ED8B4.url'),"minWidth":1,"propagateClick":false,"top":"25%","backgroundOpacity":0,"width":"50%","height":"50%","scaleMode":"fit_inside","class":"Image","horizontalAlign":"center"},{"scrollBarColor":"#000000","backgroundColorRatios":[1],"layout":"absolute","click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0CE3DF56_468E_568D_41B3_5A31F681E4E1, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_0ED3FC18_46FA_5A85_41CB_5D744F5AD78D)","id":"Container_0ED3FC18_46FA_5A85_41CB_5D744F5AD78D","creationPolicy":"inAdvance","left":"0%","backgroundColor":["#000000"],"data":{"name":"info panel"},"overflow":"scroll","minHeight":20,"minWidth":20,"gap":10,"propagateClick":false,"top":"0%","scrollBarMargin":2,"backgroundOpacity":0.4,"height":"100%","width":"100%","children":["this.Container_0E8E0CA1_4685_BB87_41C9_036021B79DBE"],"class":"Container"},{"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_0CE3DF56_468E_568D_41B3_5A31F681E4E1, 'hideEffect', false)}.bind(this); invisibleFunc(this.Container_0ED3FC18_46FA_5A85_41CB_5D744F5AD78D)","iconURL":"skin/IconButton_0F4D2F79_468E_B687_41AB_86A57B660C2A.png","id":"IconButton_0F4D2F79_468E_B687_41AB_86A57B660C2A","maxHeight":256,"data":{"name":"close"},"maxWidth":256,"right":"0%","verticalAlign":"middle","minHeight":1,"minWidth":1,"propagateClick":false,"top":"0%","backgroundOpacity":0,"width":56,"height":57,"class":"IconButton","horizontalAlign":"center"},{"autoNearFar":true,"minZ":-69.86,"minY":1.41,"translationSpeed":0.4,"initialFov":80,"initialZ":-62.78,"maxStepHeight":0.2,"initialPitch":-8.57,"maxY":1.48,"rotationSpeed":0.7,"id":"cam_5D7B313F_45BA_6AFB_41A9_8E358EF0630E","maxZ":-62.36,"maxX":4.32,"minX":-1.11,"class":"FirstPersonModel3DCamera","initialY":1.45,"initialYaw":-63.9,"initialX":4.14,"vrEnabled":true},{"id":"res_5C378F78_45BA_5686_41BF_8915C4CE0C73","levels":[{"class":"Model3DResourceLevel","url":"media/model_5C37CF78_45BA_5686_41D0_C2AA1D02E277/scene.glb"},{"class":"Model3DResourceLevel","url":"media/model_5C37CF78_45BA_5686_41D0_C2AA1D02E277/scene_mobile.glb","tags":"mobile"}],"class":"Model3DResource"},{"class":"AmbientLight","id":"light_5D7AE13F_45BA_6AFB_41A5_1B10315D6AA2"}],"children":["this.MainViewer","this.IconButton_7767DC39_469A_5A86_41CB_4A3374AF41B5","this.IconButton_729BB4CE_468A_6B9D_41D0_955C3E306CB4","this.Container_0ED3FC18_46FA_5A85_41CB_5D744F5AD78D"],"class":"Player"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.27, Sat Jul 26 2025