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
    
      
      
    
      const element = document.getElementById("55e46e4a-0fcb-4b5f-80af-a74117c57eb3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '55e46e4a-0fcb-4b5f-80af-a74117c57eb3' but no matching script tag was found.")
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
                    
                  const docs_json = '{"fcf3a8c2-b2cb-4170-a271-9359d8d97f5f":{"defs":[],"roots":{"references":[{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48037","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.4166666666666665},"id":"48035","type":"Span"},{"attributes":{"source":{"id":"48029"}},"id":"48034","type":"CDSView"},{"attributes":{"tools":[{"id":"47996"},{"id":"47997"},{"id":"47998"},{"id":"47999"},{"id":"48000"},{"id":"48001"},{"id":"48002"},{"id":"48003"}]},"id":"48006","type":"Toolbar"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48039","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48036"},"glyph":{"id":"48037"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48039"},"nonselection_glyph":{"id":"48038"},"view":{"id":"48041"}},"id":"48040","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"MzMzMzOzDUC4HoXrUTgPQDCW/GLJrwxA0GkDnTbQDEBtoNMGOu0LQOi0gU4baApAzszMzMzMC0DrUbgehWsLQClcj8L1qApAqA102kAnCkBH4XoUrkcKQMaSXyz5xQlA6LSBThtoCkAqXI/C9agKQClcj8L1qApACtejcD0KC0AGOm2g0wYKQMkvlvxiyQpAaQOdNtDpCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48092"},"selection_policy":{"id":"48091"}},"id":"48036","type":"ColumnDataSource"},{"attributes":{"ticks":[0,1,2,3]},"id":"48075","type":"FixedTicker"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.4166666666666665},"id":"48042","type":"Span"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48055","type":"VBar"},{"attributes":{},"id":"48091","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48038","type":"VBar"},{"attributes":{"source":{"id":"48036"}},"id":"48041","type":"CDSView"},{"attributes":{},"id":"48092","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"6YVe6IVe4D9nZmZmZmbeP2dmZmZmZu4/WWqlVmql7D/eyI3cyI3YP7vQC73QC9U/uBM7sRM73T+vEzuxEzvdPyZ2Yid2Ytc/lxu5kRu52T8ZuZEbuZHfP5AbuZEbudk/QS/0Qi/04D8LwQ/8wA/cP5AbuZEbudk/q9RKrdRK4z9BL/RCL/TgPyZ2Yid2Ytc/USu1Uiu1wj8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48103"},"selection_policy":{"id":"48102"}},"id":"48047","type":"ColumnDataSource"},{"attributes":{},"id":"48104","type":"UnionRenderers"},{"attributes":{"coordinates":null,"data_source":{"id":"48054"},"glyph":{"id":"48055"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48057"},"nonselection_glyph":{"id":"48056"},"view":{"id":"48059"}},"id":"48058","type":"GlyphRenderer"},{"attributes":{},"id":"48106","type":"UnionRenderers"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48050","type":"VBar"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48048","type":"VBar"},{"attributes":{"coordinates":null,"data_source":{"id":"48047"},"glyph":{"id":"48048"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48050"},"nonselection_glyph":{"id":"48049"},"view":{"id":"48052"}},"id":"48051","type":"GlyphRenderer"},{"attributes":{},"id":"48107","type":"Selection"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"48004","type":"BoxAnnotation"},{"attributes":{"source":{"id":"48047"}},"id":"48052","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48049","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48057","type":"VBar"},{"attributes":{},"id":"48105","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.48076923076923067},"id":"48053","type":"Span"},{"attributes":{"coordinates":null,"data_source":{"id":"48061"},"glyph":{"id":"48062"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48064"},"nonselection_glyph":{"id":"48063"},"view":{"id":"48066"}},"id":"48065","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"P/ADP/AD9z+SG7mRG7n2Py/0Qi/0QvU/eqEXeqEX9D9IbuRGbuT3P4If+IEf+PQ/MPRCL/RC9T+ZmZmZmZn3Pyd2Yid2YvQ/9kIv9EIv+D+4kRu5kRv7P7ATO7ETO/o/oBd6oRd6+D+mF3qhF3r4P1ZqpVZqpfk/9EIv9EIv+D9GbuRGbuT3P07sxE7sxPg/wA/8wA/8+z8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48105"},"selection_policy":{"id":"48104"}},"id":"48054","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48064","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4807692307692308},"id":"48060","type":"Span"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48062","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48056","type":"VBar"},{"attributes":{"source":{"id":"48054"}},"id":"48059","type":"CDSView"},{"attributes":{"coordinates":null,"data_source":{"id":"48068"},"glyph":{"id":"48069"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48071"},"nonselection_glyph":{"id":"48070"},"view":{"id":"48073"}},"id":"48072","type":"GlyphRenderer"},{"attributes":{"data":{"top":{"__ndarray__":"4Qd+4Af+BUDVSq3USq0EQBh6oRd6oQJAGHqhF3qhAkAUO7ETOzECQCu1Uiu10gRAd2IndmKnA0DFTuzETuwCQHIjN3IjNwNAJDdyIzfyA0Bu5EZu5MYCQB/4gR/4gQNAxU7sxE7sAkDTC73QCz0EQNALvdALPQRA0Au90As9BEB6oRd6oRcEQIIf+IEf+ARAhl7ohV5oBUA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48107"},"selection_policy":{"id":"48106"}},"id":"48061","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.2},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48071","type":"VBar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":2.480769230769231},"id":"48067","type":"Span"},{"attributes":{},"id":"48108","type":"UnionRenderers"},{"attributes":{"bottom":{"value":3},"fill_color":{"value":"#c10c90"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48069","type":"VBar"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48063","type":"VBar"},{"attributes":{"source":{"id":"48061"}},"id":"48066","type":"CDSView"},{"attributes":{},"id":"48109","type":"Selection"},{"attributes":{"data":{"top":{"__ndarray__":"EPzAD/zACUAg+IEf+IELQMEP/MAPfApAdmIndmKnC0A4ciM3ciMOQIZe6IVeaA1Ah17ohV5oDUDYiZ3YiR0NQD7wAz/wAw9Ae6EXeqEXDEAbuZEbuRELQHZiJ3ZipwtAeqEXeqEXDEB0IzdyIzcLQBu5kRu5EQtAFDuxEzsxCkByIzdyIzcLQBu5kRu5EQtAxU7sxE7sCkA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48109"},"selection_policy":{"id":"48108"}},"id":"48068","type":"ColumnDataSource"},{"attributes":{"toolbars":[{"id":"47972"},{"id":"48006"}],"tools":[{"id":"47962"},{"id":"47963"},{"id":"47964"},{"id":"47965"},{"id":"47966"},{"id":"47967"},{"id":"47968"},{"id":"47969"},{"id":"47996"},{"id":"47997"},{"id":"47998"},{"id":"47999"},{"id":"48000"},{"id":"48001"},{"id":"48002"},{"id":"48003"}]},"id":"48114","type":"ProxyToolbar"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":3.480769230769231},"id":"48074","type":"Span"},{"attributes":{"bottom":{"value":3},"fill_alpha":{"value":0.1},"fill_color":{"value":"#c10c90"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48070","type":"VBar"},{"attributes":{"source":{"id":"48068"}},"id":"48073","type":"CDSView"},{"attributes":{"toolbar":{"id":"48114"},"toolbar_location":"above"},"id":"48115","type":"ToolbarBox"},{"attributes":{"below":[{"id":"47988"}],"center":[{"id":"47991"},{"id":"47995"},{"id":"48053"},{"id":"48060"},{"id":"48067"},{"id":"48074"}],"height":331,"left":[{"id":"47992"}],"output_backend":"webgl","renderers":[{"id":"48051"},{"id":"48058"},{"id":"48065"},{"id":"48072"}],"title":{"id":"48077"},"toolbar":{"id":"48006"},"toolbar_location":null,"width":496,"x_range":{"id":"47946"},"x_scale":{"id":"47984"},"y_range":{"id":"47948"},"y_scale":{"id":"47986"}},"id":"47981","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"48003","type":"HoverTool"},{"attributes":{"callback":null},"id":"47969","type":"HoverTool"},{"attributes":{"data":{"top":{"__ndarray__":"ZWZmZmZm7j9OG+i0gU7XP2cDnTbQad8/WfKLJb9Y2j9Bpw102kDTP17JL5b8Yt0/PW2g0wY60T9U8oslv1jaP1ws+cWSX9w/WlVVVVVV2T9SVVVVVVXZPzTQaQOdNuA/ZgOdNtBp3z9m8oslv1jaP0h+seQXS9Y/SH6x5BdL1j84baDTBjrRPz+nDXTaQNM/SH6x5BdL1j8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48086"},"selection_policy":{"id":"48085"}},"id":"48015","type":"ColumnDataSource"},{"attributes":{},"id":"48080","type":"BasicTickFormatter"},{"attributes":{},"id":"47997","type":"PanTool"},{"attributes":{},"id":"47946","type":"DataRange1d"},{"attributes":{},"id":"47968","type":"SaveTool"},{"attributes":{},"id":"47984","type":"LinearScale"},{"attributes":{},"id":"48081","type":"AllLabels"},{"attributes":{"children":[[{"id":"47945"},0,0],[{"id":"47981"},0,1]]},"id":"48113","type":"GridBox"},{"attributes":{},"id":"47967","type":"UndoTool"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAAAECkcD0K1yMBQCa/WPKLpQFA6LSBThtoAkBqA5020OkCQCz5xZJfrANA8O7u7u5uBEDrUbgehWsDQOtRuB6FawNAC9ejcD0KA0BKfrHkF0sDQA102kCnDQRAqqqqqqoqA0BQG+i0gU4EQC+W/GLJrwRAThvotIFOBECuR+F6FC4EQE4b6LSBTgRAcD0K16PwBEA=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48090"},"selection_policy":{"id":"48089"}},"id":"48029","type":"ColumnDataSource"},{"attributes":{},"id":"48083","type":"BasicTickFormatter"},{"attributes":{},"id":"47955","type":"BasicTicker"},{"attributes":{},"id":"47963","type":"PanTool"},{"attributes":{},"id":"48084","type":"AllLabels"},{"attributes":{"bottom_units":"screen","coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","syncable":false,"top_units":"screen"},"id":"47970","type":"BoxAnnotation"},{"attributes":{},"id":"48001","type":"UndoTool"},{"attributes":{},"id":"47952","type":"LinearScale"},{"attributes":{},"id":"47999","type":"WheelZoomTool"},{"attributes":{},"id":"47996","type":"ResetTool"},{"attributes":{"below":[{"id":"47954"}],"center":[{"id":"47957"},{"id":"47961"},{"id":"48021"},{"id":"48028"},{"id":"48035"},{"id":"48042"}],"height":331,"left":[{"id":"47958"}],"output_backend":"webgl","renderers":[{"id":"48019"},{"id":"48026"},{"id":"48033"},{"id":"48040"}],"title":{"id":"48045"},"toolbar":{"id":"47972"},"toolbar_location":null,"width":496,"x_range":{"id":"47946"},"x_scale":{"id":"47950"},"y_range":{"id":"47948"},"y_scale":{"id":"47952"}},"id":"47945","subtype":"Figure","type":"Plot"},{"attributes":{"overlay":{"id":"48004"}},"id":"47998","type":"BoxZoomTool"},{"attributes":{"overlay":{"id":"48005"}},"id":"48000","type":"LassoSelectTool"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48083"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48084"},"ticker":{"id":"47955"}},"id":"47954","type":"LinearAxis"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"47971","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"data_source":{"id":"48029"},"glyph":{"id":"48030"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48032"},"nonselection_glyph":{"id":"48031"},"view":{"id":"48034"}},"id":"48033","type":"GlyphRenderer"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.2},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48032","type":"VBar"},{"attributes":{},"id":"48097","type":"BasicTickFormatter"},{"attributes":{"children":[{"id":"48115"},{"id":"48113"}]},"id":"48116","type":"Column"},{"attributes":{},"id":"47948","type":"DataRange1d"},{"attributes":{"coordinates":null,"data_source":{"id":"48015"},"glyph":{"id":"48016"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48018"},"nonselection_glyph":{"id":"48017"},"view":{"id":"48020"}},"id":"48019","type":"GlyphRenderer"},{"attributes":{},"id":"48098","type":"AllLabels"},{"attributes":{},"id":"47965","type":"WheelZoomTool"},{"attributes":{},"id":"48085","type":"UnionRenderers"},{"attributes":{},"id":"48100","type":"BasicTickFormatter"},{"attributes":{},"id":"48086","type":"Selection"},{"attributes":{},"id":"48101","type":"AllLabels"},{"attributes":{"tools":[{"id":"47962"},{"id":"47963"},{"id":"47964"},{"id":"47965"},{"id":"47966"},{"id":"47967"},{"id":"47968"},{"id":"47969"}]},"id":"47972","type":"Toolbar"},{"attributes":{"coordinates":null,"data_source":{"id":"48022"},"glyph":{"id":"48023"},"group":null,"hover_glyph":null,"muted_glyph":{"id":"48025"},"nonselection_glyph":{"id":"48024"},"view":{"id":"48027"}},"id":"48026","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48018","type":"VBar"},{"attributes":{"bottom":{"value":1},"fill_color":{"value":"#fa7c17"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48023","type":"VBar"},{"attributes":{"coordinates":null,"fill_alpha":0.5,"fill_color":"lightgrey","group":null,"level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"syncable":false,"xs_units":"screen","ys_units":"screen"},"id":"48005","type":"PolyAnnotation"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":1.4166666666666665},"id":"48028","type":"Span"},{"attributes":{"ticks":[0,1,2,3]},"id":"48043","type":"FixedTicker"},{"attributes":{},"id":"48087","type":"UnionRenderers"},{"attributes":{"data":{"top":{"__ndarray__":"AAAAAAAA8D8OdNpApw30PxSuR+F6FPY/1AY6baDT9T8c6LSBThv4PxdLfrHkF/c/1QY6baDT9T+V/GLJL5b2P1jyiyW/WPc/43oUrkfh+T8ehetRuB75PxdLfrHkF/c/mJmZmZmZ9z8YrkfhehT2P1RVVVVVVfY/lfxiyS+W9j/gehSuR+H5P5iZmZmZmfc/kl8s+cWS9T8=","dtype":"float64","order":"little","shape":[19]},"x":{"__ndarray__":"DeU1lNdQSkDKayivobxjQCivobyGcnBAbCivobwGd0CuobyG8pp9QHkN5TWUF4JAGsprKK9hhUC8hvIayquIQF5DeQ3l9YtAAAAAAABAj0BQXkN5DUWRQKK8hvIa6pJA8hrKayiPlEBDeQ3lNTSWQJTXUF5D2ZdA5DWU11B+mUA2lNdQXiObQIbyGspryJxA2FBeQ3ltnkA=","dtype":"float64","order":"little","shape":[19]}},"selected":{"id":"48088"},"selection_policy":{"id":"48087"}},"id":"48022","type":"ColumnDataSource"},{"attributes":{"bottom":{"value":2},"fill_alpha":{"value":0.1},"fill_color":{"value":"#328c06"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48031","type":"VBar"},{"attributes":{},"id":"48088","type":"Selection"},{"attributes":{"coordinates":null,"group":null,"line_dash":[6],"location":0.41666666666666663},"id":"48021","type":"Span"},{"attributes":{},"id":"48102","type":"UnionRenderers"},{"attributes":{},"id":"47989","type":"BasicTicker"},{"attributes":{"axis":{"id":"47958"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47961","type":"Grid"},{"attributes":{"coordinates":null,"group":null,"text":"mu"},"id":"48077","type":"Title"},{"attributes":{},"id":"48103","type":"Selection"},{"attributes":{},"id":"47950","type":"LinearScale"},{"attributes":{"axis":{"id":"47992"},"coordinates":null,"dimension":1,"group":null,"ticker":null},"id":"47995","type":"Grid"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.1},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48024","type":"VBar"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48080"},"group":null,"major_label_policy":{"id":"48081"},"ticker":{"id":"48043"}},"id":"47958","type":"LinearAxis"},{"attributes":{"axis_label":"Rank (all chains)","coordinates":null,"formatter":{"id":"48100"},"group":null,"major_label_overrides":{"0":"0","1":"1","2":"2","3":"3"},"major_label_policy":{"id":"48101"},"ticker":{"id":"47989"}},"id":"47988","type":"LinearAxis"},{"attributes":{"bottom":{"value":2},"fill_color":{"value":"#328c06"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48030","type":"VBar"},{"attributes":{},"id":"48002","type":"SaveTool"},{"attributes":{"coordinates":null,"group":null,"text":"tau"},"id":"48045","type":"Title"},{"attributes":{"axis_label":"Chain","coordinates":null,"formatter":{"id":"48097"},"group":null,"major_label_policy":{"id":"48098"},"ticker":{"id":"48075"}},"id":"47992","type":"LinearAxis"},{"attributes":{"overlay":{"id":"47970"}},"id":"47964","type":"BoxZoomTool"},{"attributes":{},"id":"47986","type":"LinearScale"},{"attributes":{"axis":{"id":"47988"},"coordinates":null,"group":null,"ticker":null},"id":"47991","type":"Grid"},{"attributes":{"source":{"id":"48022"}},"id":"48027","type":"CDSView"},{"attributes":{},"id":"48089","type":"UnionRenderers"},{"attributes":{"axis":{"id":"47954"},"coordinates":null,"group":null,"ticker":null},"id":"47957","type":"Grid"},{"attributes":{},"id":"48090","type":"Selection"},{"attributes":{"source":{"id":"48015"}},"id":"48020","type":"CDSView"},{"attributes":{"bottom":{"value":1},"fill_alpha":{"value":0.2},"fill_color":{"value":"#fa7c17"},"hatch_alpha":{"value":0.2},"line_alpha":{"value":0.2},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48025","type":"VBar"},{"attributes":{},"id":"47962","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#2a2eec"},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48016","type":"VBar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#2a2eec"},"hatch_alpha":{"value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"white"},"top":{"field":"top"},"width":{"value":105.26315789473684},"x":{"field":"x"}},"id":"48017","type":"VBar"},{"attributes":{"overlay":{"id":"47971"}},"id":"47966","type":"LassoSelectTool"}],"root_ids":["48116"]},"title":"Bokeh Application","version":"2.4.2"}}';
                  const render_items = [{"docid":"fcf3a8c2-b2cb-4170-a271-9359d8d97f5f","root_ids":["48116"],"roots":{"48116":"55e46e4a-0fcb-4b5f-80af-a74117c57eb3"}}];
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