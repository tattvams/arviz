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
    
      
      
    
      const element = document.getElementById("bfb54414-0f5d-40cb-bbd8-71bedb5489d5");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'bfb54414-0f5d-40cb-bbd8-71bedb5489d5' but no matching script tag was found.")
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
                    
                  const docs_json = '{"0bed48d3-e58c-48b2-b406-3a8861ec54de":{"defs":[],"roots":{"references":[{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"17304","type":"Scatter"},{"attributes":{},"id":"17275","type":"LinearScale"},{"attributes":{},"id":"17315","type":"BasicTickFormatter"},{"attributes":{"toolbars":[{"id":"17295"}],"tools":[{"id":"17285"},{"id":"17286"},{"id":"17287"},{"id":"17288"},{"id":"17289"},{"id":"17290"},{"id":"17291"},{"id":"17292"}]},"id":"17323","type":"ProxyToolbar"},{"attributes":{},"id":"17269","type":"DataRange1d"},{"attributes":{},"id":"17285","type":"ResetTool"},{"attributes":{},"id":"17273","type":"LinearScale"},{"attributes":{"children":[[{"id":"17268"},0,0]]},"id":"17322","type":"GridBox"},{"attributes":{},"id":"17317","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"17292","type":"HoverTool"},{"attributes":{"source":{"id":"17305"}},"id":"17307","type":"CDSView"},{"attributes":{},"id":"17282","type":"BasicTicker"},{"attributes":{"overlay":{"id":"17293"}},"id":"17287","type":"BoxZoomTool"},{"attributes":{},"id":"17312","type":"BasicTickFormatter"},{"attributes":{"coordinates":null,"group":null,"text":"centered model - non centered model"},"id":"17308","type":"Title"},{"attributes":{"coordinates":null,"formatter":{"id":"17315"},"group":null,"major_label_policy":{"id":"17316"},"ticker":{"id":"17278"}},"id":"17277","type":"LinearAxis"},{"attributes":{},"id":"17291","type":"SaveTool"},{"attributes":{"axis":{"id":"17277"},"coordinates":null,"group":null,"ticker":null},"id":"17280","type":"Grid"},{"attributes":{"toolbar":{"id":"17323"},"toolbar_location":"above"},"id":"17324","type":"ToolbarBox"},{"attributes":{},"id":"17318","type":"Selection"},{"attributes":{},"id":"17290","type":"UndoTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"17318"},"selection_policy":{"id":"17317"}},"id":"17305","type":"ColumnDataSource"},{"attributes":{"overlay":{"id":"17294"}},"id":"17289","type":"LassoSelectTool"},{"attributes":{"axis":{"id":"17281"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"17284","type":"Grid"},{"attributes":{},"id":"17316","type":"AllLabels"},{"attributes":{},"id":"17288","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"17293","type":"BoxAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"17305"},"glyph":{"id":"17304"},"group":null,"hover_glyph":null,"view":{"id":"17307"}},"id":"17306","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"17285"},{"id":"17286"},{"id":"17287"},{"id":"17288"},{"id":"17289"},{"id":"17290"},{"id":"17291"},{"id":"17292"}]},"id":"17295","type":"Toolbar"},{"attributes":{"below":[{"id":"17277"}],"center":[{"id":"17280"},{"id":"17284"}],"height":288,"left":[{"id":"17281"}],"output_backend":"webgl","renderers":[{"id":"17306"}],"title":{"id":"17308"},"toolbar":{"id":"17295"},"toolbar_location":null,"width":432,"x_range":{"id":"17269"},"x_scale":{"id":"17273"},"y_range":{"id":"17271"},"y_scale":{"id":"17275"}},"id":"17268","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"17312"},"group":null,"major_label_policy":{"id":"17313"},"ticker":{"id":"17282"}},"id":"17281","type":"LinearAxis"},{"attributes":{},"id":"17278","type":"BasicTicker"},{"attributes":{"children":[{"id":"17324"},{"id":"17322"}]},"id":"17325","type":"Column"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"17294","type":"PolyAnnotation"},{"attributes":{},"id":"17286","type":"PanTool"},{"attributes":{},"id":"17313","type":"AllLabels"},{"attributes":{},"id":"17271","type":"DataRange1d"}],"root_ids":["17325"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"0bed48d3-e58c-48b2-b406-3a8861ec54de","root_ids":["17325"],"roots":{"17325":"bfb54414-0f5d-40cb-bbd8-71bedb5489d5"}}];
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