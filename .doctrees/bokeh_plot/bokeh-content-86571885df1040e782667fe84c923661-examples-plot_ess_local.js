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
    
      
      
    
      const element = document.getElementById("52d2e1cb-011a-4f5d-9628-4703d00fd340");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '52d2e1cb-011a-4f5d-9628-4703d00fd340' but no matching script tag was found.")
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
                    
                  const docs_json = '{"9d80c112-0d53-421e-bc2c-25e870d5656a":{"defs":[],"roots":{"references":[{"attributes":{"coordinates":null,"data_source":{"id":"21062"},"glyph":{"id":"21061"},"group":null,"hover_glyph":null,"view":{"id":"21064"}},"id":"21063","type":"GlyphRenderer"},{"attributes":{"data":{"rug_x":{"__ndarray__":"u/QnuP7V5z9SIsxa1SLgPw==","dtype":"float64","order":"little","shape":[2]},"rug_y":{"__ndarray__":"nB0+wbWyacCcHT7BtbJpwA==","dtype":"float64","order":"little","shape":[2]}},"selected":{"id":"21079"},"selection_policy":{"id":"21078"}},"id":"21062","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"21043","type":"HoverTool"},{"attributes":{},"id":"21026","type":"LinearScale"},{"attributes":{"source":{"id":"21062"}},"id":"21064","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"21055"},"glyph":{"id":"21056"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"21058"},"nonselection_glyph":{"id":"21057"},"view":{"id":"21060"}},"id":"21059","type":"GlyphRenderer"},{"attributes":{},"id":"21074","type":"BasicTickFormatter"},{"attributes":{},"id":"21077","type":"Selection"},{"attributes":{},"id":"21041","type":"UndoTool"},{"attributes":{"angle":{"value":1.5707963267948966},"line_alpha":{"value":0.35},"marker":{"value":"dash"},"size":{"value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"21061","type":"Scatter"},{"attributes":{},"id":"21079","type":"Selection"},{"attributes":{},"id":"21075","type":"AllLabels"},{"attributes":{},"id":"21029","type":"BasicTicker"},{"attributes":{"axis":{"id":"21032"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"21035","type":"Grid"},{"attributes":{},"id":"21033","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"21044","type":"BoxAnnotation"},{"attributes":{},"id":"21020","type":"DataRange1d"},{"attributes":{},"id":"21037","type":"PanTool"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"21067","type":"Title"},{"attributes":{"axis":{"id":"21028"},"coordinates":null,"group":null,"ticker":null},"id":"21031","type":"Grid"},{"attributes":{"source":{"id":"21055"}},"id":"21060","type":"CDSView"},{"attributes":{"tools":[{"id":"21036"},{"id":"21037"},{"id":"21038"},{"id":"21039"},{"id":"21040"},{"id":"21041"},{"id":"21042"},{"id":"21043"}]},"id":"21046","type":"Toolbar"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21056","type":"Circle"},{"attributes":{"overlay":{"id":"21044"}},"id":"21038","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"21085"},{"id":"21083"}]},"id":"21086","type":"Column"},{"attributes":{"coordinates":null,"group":null,"line_color":"red","line_dash":[6],"line_width":3,"location":400},"id":"21066","type":"Span"},{"attributes":{"data":{"x":{"__ndarray__":"AAAAAAAAAACamZmZmZmpP5qZmZmZmbk/NDMzMzMzwz+amZmZmZnJPwAAAAAAANA/NDMzMzMz0z9nZmZmZmbWP5qZmZmZmdk/zczMzMzM3D8AAAAAAADgP5qZmZmZmeE/NDMzMzMz4z/NzMzMzMzkP2dmZmZmZuY/AAAAAAAA6D+amZmZmZnpPzQzMzMzM+s/zczMzMzM7D9nZmZmZmbuPw==","dtype":"float64","order":"little","shape":[20]},"y":{"__ndarray__":"PSWUrfrllUC6ZTfE07ObQIHSxpixD6BAXutlA2Fon0AWemawUmmdQBJdptJ4v59A48F0NdPPm0BhLg6FQP6cQNT8SMHKBJ1AN/hQuCybnECYCNGlG7+ZQOL2UqcslZtAhDgC8IHHmkDe0e+ORHOcQJp7JDyiB6BAxVCwvOY1n0BSmX0dHQ6gQFTe5JuCLJtAHVMIAw/Em0COFXr8JyGYQA==","dtype":"float64","order":"little","shape":[20]}},"selected":{"id":"21077"},"selection_policy":{"id":"21076"}},"id":"21055","type":"ColumnDataSource"},{"attributes":{},"id":"21036","type":"ResetTool"},{"attributes":{},"id":"21024","type":"LinearScale"},{"attributes":{},"id":"21071","type":"BasicTickFormatter"},{"attributes":{},"id":"21078","type":"UnionRenderers"},{"attributes":{"toolbar":{"id":"21084"},"toolbar_location":"above"},"id":"21085","type":"ToolbarBox"},{"attributes":{"coordinates":null,"group":null,"line_alpha":0.7,"line_width":1.5,"location":0},"id":"21065","type":"Span"},{"attributes":{"overlay":{"id":"21045"}},"id":"21040","type":"LassoSelectTool"},{"attributes":{"axis_label":"ESS for small intervals","coordinates":null,"formatter":{"id":"21071"},"group":null,"major_label_policy":{"id":"21072"},"ticker":{"id":"21033"}},"id":"21032","type":"LinearAxis"},{"attributes":{},"id":"21022","type":"DataRange1d"},{"attributes":{},"id":"21072","type":"AllLabels"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"21045","type":"PolyAnnotation"},{"attributes":{},"id":"21042","type":"SaveTool"},{"attributes":{"below":[{"id":"21028"}],"center":[{"id":"21031"},{"id":"21035"}],"height":500,"left":[{"id":"21032"}],"output_backend":"webgl","renderers":[{"id":"21059"},{"id":"21063"},{"id":"21065"},{"id":"21066"}],"title":{"id":"21067"},"toolbar":{"id":"21046"},"toolbar_location":null,"width":500,"x_range":{"id":"21020"},"x_scale":{"id":"21024"},"y_range":{"id":"21022"},"y_scale":{"id":"21026"}},"id":"21019","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21058","type":"Circle"},{"attributes":{"toolbars":[{"id":"21046"}],"tools":[{"id":"21036"},{"id":"21037"},{"id":"21038"},{"id":"21039"},{"id":"21040"},{"id":"21041"},{"id":"21042"},{"id":"21043"}]},"id":"21084","type":"ProxyToolbar"},{"attributes":{"axis_label":"Quantile","coordinates":null,"formatter":{"id":"21074"},"group":null,"major_label_policy":{"id":"21075"},"ticker":{"id":"21029"}},"id":"21028","type":"LinearAxis"},{"attributes":{},"id":"21076","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"21057","type":"Circle"},{"attributes":{},"id":"21039","type":"WheelZoomTool"},{"attributes":{"children":[[{"id":"21019"},0,0]]},"id":"21083","type":"GridBox"}],"root_ids":["21086"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"9d80c112-0d53-421e-bc2c-25e870d5656a","root_ids":["21086"],"roots":{"21086":"52d2e1cb-011a-4f5d-9628-4703d00fd340"}}];
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