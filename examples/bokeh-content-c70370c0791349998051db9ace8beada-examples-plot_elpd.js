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
    
      
      
    
      const element = document.getElementById("97b31e73-b0ac-45c2-aaac-00c4b9373dcf");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '97b31e73-b0ac-45c2-aaac-00c4b9373dcf' but no matching script tag was found.")
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
                    
                  const docs_json = '{"c7622890-2862-4d8d-9b8c-e109c8fe3563":{"defs":[],"roots":{"references":[{"attributes":{},"id":"20608","type":"BasicTickFormatter"},{"attributes":{},"id":"20609","type":"AllLabels"},{"attributes":{},"id":"20581","type":"ResetTool"},{"attributes":{"overlay":{"id":"20590"}},"id":"20585","type":"LassoSelectTool"},{"attributes":{},"id":"20571","type":"LinearScale"},{"attributes":{},"id":"20613","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"20601"},"glyph":{"id":"20600"},"group":null,"hover_glyph":null,"view":{"id":"20603"}},"id":"20602","type":"GlyphRenderer"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"20590","type":"PolyAnnotation"},{"attributes":{"axis":{"id":"20577"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"20580","type":"Grid"},{"attributes":{},"id":"20584","type":"WheelZoomTool"},{"attributes":{"axis":{"id":"20573"},"coordinates":null,"group":null,"ticker":null},"id":"20576","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"Centered eight - Non centered eight"},"id":"20604","type":"Title"},{"attributes":{},"id":"20578","type":"BasicTicker"},{"attributes":{},"id":"20612","type":"AllLabels"},{"attributes":{"coordinates":null,"formatter":{"id":"20611"},"group":null,"major_label_policy":{"id":"20612"},"ticker":{"id":"20574"}},"id":"20573","type":"LinearAxis"},{"attributes":{"axis_label":"ELPD difference","coordinates":null,"formatter":{"id":"20608"},"group":null,"major_label_policy":{"id":"20609"},"ticker":{"id":"20578"}},"id":"20577","type":"LinearAxis"},{"attributes":{},"id":"20567","type":"DataRange1d"},{"attributes":{"toolbars":[{"id":"20591"}],"tools":[{"id":"20581"},{"id":"20582"},{"id":"20583"},{"id":"20584"},{"id":"20585"},{"id":"20586"},{"id":"20587"},{"id":"20588"}]},"id":"20619","type":"ProxyToolbar"},{"attributes":{"tools":[{"id":"20581"},{"id":"20582"},{"id":"20583"},{"id":"20584"},{"id":"20585"},{"id":"20586"},{"id":"20587"},{"id":"20588"}]},"id":"20591","type":"Toolbar"},{"attributes":{},"id":"20614","type":"Selection"},{"attributes":{},"id":"20574","type":"BasicTicker"},{"attributes":{},"id":"20587","type":"SaveTool"},{"attributes":{},"id":"20586","type":"UndoTool"},{"attributes":{"below":[{"id":"20573"}],"center":[{"id":"20576"},{"id":"20580"}],"height":288,"left":[{"id":"20577"}],"output_backend":"webgl","renderers":[{"id":"20602"}],"title":{"id":"20604"},"toolbar":{"id":"20591"},"toolbar_location":null,"width":432,"x_range":{"id":"20565"},"x_scale":{"id":"20569"},"y_range":{"id":"20567"},"y_scale":{"id":"20571"}},"id":"20564","subtype":"Figure","type":"Plot"},{"attributes":{"toolbar":{"id":"20619"},"toolbar_location":"above"},"id":"20620","type":"ToolbarBox"},{"attributes":{"callback":null},"id":"20588","type":"HoverTool"},{"attributes":{"data":{"sizes":{"__ndarray__":"AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==","dtype":"float64","order":"little","shape":[8]},"xdata":[0,1,2,3,4,5,6,7],"ydata":{"__ndarray__":"AB6QFygcqb8AkPbM2OqMvwDAeMOrrEA/ABRdkUAak7+A2X/x9IekPwDQu3qf/FM/gBB6xSIVsb8AE7uac6iQvw==","dtype":"float64","order":"little","shape":[8]}},"selected":{"id":"20614"},"selection_policy":{"id":"20613"}},"id":"20601","type":"ColumnDataSource"},{"attributes":{},"id":"20569","type":"LinearScale"},{"attributes":{},"id":"20582","type":"PanTool"},{"attributes":{"line_color":{"value":"#2a2eec"},"marker":{"field":"Cross"},"size":{"field":"sizes"},"x":{"field":"xdata"},"y":{"field":"ydata"}},"id":"20600","type":"Scatter"},{"attributes":{"source":{"id":"20601"}},"id":"20603","type":"CDSView"},{"attributes":{"children":[{"id":"20620"},{"id":"20618"}]},"id":"20621","type":"Column"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"20589","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"20589"}},"id":"20583","type":"BoxZoomTool"},{"attributes":{},"id":"20565","type":"DataRange1d"},{"attributes":{},"id":"20611","type":"BasicTickFormatter"},{"attributes":{"children":[[{"id":"20564"},0,0]]},"id":"20618","type":"GridBox"}],"root_ids":["20621"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"c7622890-2862-4d8d-9b8c-e109c8fe3563","root_ids":["20621"],"roots":{"20621":"97b31e73-b0ac-45c2-aaac-00c4b9373dcf"}}];
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