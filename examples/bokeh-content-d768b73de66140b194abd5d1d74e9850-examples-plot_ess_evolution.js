(function() {
  const fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      const force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      const element = document.getElementById("cd5f0590-62d1-4bb4-8520-5cba655f96d1");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'cd5f0590-62d1-4bb4-8520-5cba655f96d1' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error(url) {
          console.error("failed to load " + url);
        }
    
        for (let i = 0; i < css_urls.length; i++) {
          const url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (let i = 0; i < js_urls.length; i++) {
          const url = js_urls[i];
          const element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error.bind(null, url);
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      const js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.4.2.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-mathjax-2.4.2.min.js"];
      const css_urls = [];
      
    
      const inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            const fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  const docs_json = '{"df5ada42-4abb-44c7-9698-f0006f589e8a":{"defs":[],"roots":{"references":[{"attributes":{"axis":{"id":"20876"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20879","type":"Grid"},{"attributes":{"tools":[{"id":"20880"},{"id":"20881"},{"id":"20882"},{"id":"20883"},{"id":"20884"},{"id":"20885"},{"id":"20886"},{"id":"20887"}]},"id":"20890","type":"Toolbar"},{"attributes":{},"id":"20870","type":"LinearScale"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20941"},"selection_policy":{"id":"20940"}},"id":"20911","type":"ColumnDataSource"},{"attributes":{"children":[{"id":"20949"},{"id":"20947"}]},"id":"20950","type":"Column"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"20921"},{"id":"20915"}]},"id":"20926","type":"LegendItem"},{"attributes":{},"id":"20941","type":"Selection"},{"attributes":{"overlay":{"id":"20888"}},"id":"20882","type":"BoxZoomTool"},{"attributes":{"coordinates":null,"group":null,"text":"b"},"id":"20927","type":"Title"},{"attributes":{"axis":{"id":"20872"},"coordinates":null,"group":null,"ticker":null},"id":"20875","type":"Grid"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20939"},"selection_policy":{"id":"20938"}},"id":"20905","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20900","type":"Circle"},{"attributes":{"toolbar":{"id":"20948"},"toolbar_location":"above"},"id":"20949","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"20887","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20901","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20902","type":"Circle"},{"attributes":{},"id":"20939","type":"Selection"},{"attributes":{},"id":"20883","type":"WheelZoomTool"},{"attributes":{"source":{"id":"20917"}},"id":"20922","type":"CDSView"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20888","type":"BoxAnnotation"},{"attributes":{},"id":"20936","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"20889"}},"id":"20884","type":"LassoSelectTool"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20889","type":"PolyAnnotation"},{"attributes":{},"id":"20886","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.1},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.1},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20919","type":"Circle"},{"attributes":{},"id":"20935","type":"AllLabels"},{"attributes":{"axis_label":"ESS","coordinates":null,"formatter":{"id":"20931"},"group":null,"major_label_policy":{"id":"20932"},"ticker":{"id":"20877"}},"id":"20876","type":"LinearAxis"},{"attributes":{},"id":"20931","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.2,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20908","type":"Line"},{"attributes":{},"id":"20940","type":"UnionRenderers"},{"attributes":{},"id":"20943","type":"Selection"},{"attributes":{},"id":"20885","type":"UndoTool"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"kUgpITo5UkD/4xVCu9ZkQIwda8wmdG9AKVV7klfmc0B9iLN6f4t2QCN384Oug3lAXRIP57k5gEDe8oZZBOGEQCI3trf/S4dAdSETuLRMikCa5sM7ewSJQLpDDoqDVoxADogAvE7ZjUBXvDQTTveQQPztYWbX55BATSx1OrcnkUCJGFkHolCTQIz00+lP8ZNAUA/0blR0lEAOVbAHnSuWQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20943"},"selection_policy":{"id":"20942"}},"id":"20917","type":"ColumnDataSource"},{"attributes":{},"id":"20881","type":"PanTool"},{"attributes":{},"id":"20938","type":"UnionRenderers"},{"attributes":{},"id":"20864","type":"DataRange1d"},{"attributes":{},"id":"20873","type":"BasicTicker"},{"attributes":{},"id":"20866","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"20899"},"glyph":{"id":"20900"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20902"},"nonselection_glyph":{"id":"20901"},"view":{"id":"20904"}},"id":"20903","type":"GlyphRenderer"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"20903"},{"id":"20909"}]},"id":"20925","type":"LegendItem"},{"attributes":{"coordinates":null,"data_source":{"id":"20911"},"glyph":{"id":"20912"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20914"},"nonselection_glyph":{"id":"20913"},"view":{"id":"20916"}},"id":"20915","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"data_source":{"id":"20917"},"glyph":{"id":"20918"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20920"},"nonselection_glyph":{"id":"20919"},"view":{"id":"20922"}},"id":"20921","type":"GlyphRenderer"},{"attributes":{},"id":"20932","type":"AllLabels"},{"attributes":{},"id":"20868","type":"LinearScale"},{"attributes":{},"id":"20880","type":"ResetTool"},{"attributes":{"source":{"id":"20911"}},"id":"20916","type":"CDSView"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"0glo/ZHQYUCWuV3JG5ppQMqT1P2iwXVAqY8DrPB3e0Bh+Z3qJ/WAQBkscwHQK4RAmBvOlEfWikBL3Hu21ASOQLfWD/YkmpBAzy5bwfaykkBL+YYwKf6TQNX3Ngx5b5VAciIDv7ZVlkBpY4usN1KYQKnVB/o5gplAPOgo6bOym0CHt7M3Mq+fQCfqDPZjtqBAJ784mgSeoUD/m8TvrdqhQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"20937"},"selection_policy":{"id":"20936"}},"id":"20899","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"20890"}],"tools":[{"id":"20880"},{"id":"20881"},{"id":"20882"},{"id":"20883"},{"id":"20884"},{"id":"20885"},{"id":"20886"},{"id":"20887"}]},"id":"20948","type":"ProxyToolbar"},{"attributes":{"source":{"id":"20899"}},"id":"20904","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20907","type":"Line"},{"attributes":{"click_policy":"hide","coordinates":null,"group":null,"items":[{"id":"20925"},{"id":"20926"}],"location":"center_right","orientation":"horizontal"},"id":"20924","type":"Legend"},{"attributes":{"above":[{"id":"20924"}],"below":[{"id":"20872"}],"center":[{"id":"20875"},{"id":"20879"}],"height":500,"left":[{"id":"20876"}],"output_backend":"webgl","renderers":[{"id":"20903"},{"id":"20909"},{"id":"20915"},{"id":"20921"},{"id":"20923"}],"title":{"id":"20927"},"toolbar":{"id":"20890"},"toolbar_location":null,"width":500,"x_range":{"id":"20864"},"x_scale":{"id":"20868"},"y_range":{"id":"20866"},"y_scale":{"id":"20870"}},"id":"20863","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20912","type":"Line"},{"attributes":{},"id":"20942","type":"UnionRenderers"},{"attributes":{},"id":"20877","type":"BasicTicker"},{"attributes":{},"id":"20937","type":"Selection"},{"attributes":{"fill_color":{"value":"orange"},"hatch_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20918","type":"Circle"},{"attributes":{"coordinates":null,"data_source":{"id":"20905"},"glyph":{"id":"20906"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"20908"},"nonselection_glyph":{"id":"20907"},"view":{"id":"20910"}},"id":"20909","type":"GlyphRenderer"},{"attributes":{"axis_label":"Total number of draws","coordinates":null,"formatter":{"id":"20934"},"group":null,"major_label_policy":{"id":"20935"},"ticker":{"id":"20873"}},"id":"20872","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20913","type":"Line"},{"attributes":{"line_alpha":0.2,"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"20914","type":"Line"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"20923","type":"Span"},{"attributes":{"children":[[{"id":"20863"},0,0]]},"id":"20947","type":"GridBox"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"orange"},"hatch_alpha":{"value":0.2},"hatch_color":{"value":"orange"},"line_alpha":{"value":0.2},"line_color":{"value":"orange"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"20920","type":"Circle"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"20906","type":"Line"},{"attributes":{},"id":"20934","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"20905"}},"id":"20910","type":"CDSView"}],"root_ids":["20950"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"df5ada42-4abb-44c7-9698-f0006f589e8a","root_ids":["20950"],"roots":{"20950":"cd5f0590-62d1-4bb4-8520-5cba655f96d1"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    let attempts = 0;
                    const timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (let i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();