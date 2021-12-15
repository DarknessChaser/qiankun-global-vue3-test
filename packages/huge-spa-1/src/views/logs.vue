<template>
  <div class="logs-content">
    <h1>This is logs page</h1>
    <label>
      每秒渲染次数:
      <input v-model="times">
    </label>
    <hr>
    <input type="button" value="开始渲染" @click="renderTerm">
    <input type="button" value="停止渲染" @click="stopWriteTerm">
    <hr>
    <div ref="logContainer" id="terminal"></div>
  </div>
</template>

<script>
import {Terminal} from "xterm"
import "xterm/css/xterm.css"
import {FitAddon} from "xterm-addon-fit"
// import {WebglAddon} from "xterm-addon-webgl"
import {WebLinksAddon} from 'xterm-addon-web-links'
import {SearchAddon} from 'xterm-addon-search'
import {Unicode11Addon} from 'xterm-addon-unicode11'

export default {
  name: 'Logs',
  data() {
    return {
      term: null,
      fit: null,
      times: 0,
      renderInterval: 0,
    }
  },
  mounted() {
    this.initTerm()
    window.addEventListener('resize', this.fitTerm)
  },
  unmounted() {
    window.removeEventListener('resize', this.fitTerm)
    this.term.dispose()
  },
  methods: {
    initTerm() {
      const term = new Terminal({
        cursorBlink: true,
        scrollback: Infinity,
      })
      this.term = term
      term.open(this.$refs.logContainer)

      // const gl = new WebglAddon()
      // gl.onContextLoss(() => {
      //   gl.dispose();
      // })
      // term.loadAddon(gl)

      const fit = new FitAddon()
      this.fit = fit
      term.loadAddon(fit)
      fit.fit()

      term.loadAddon(new WebLinksAddon())

      const searchAddon = new SearchAddon()
      term.loadAddon(searchAddon)

      const unicode11Addon = new Unicode11Addon();
      term.loadAddon(unicode11Addon);

      // activate the new version
      term.unicode.activeVersion = '11';
    },
    fitTerm() {
      this.fit.fit()
    },
    renderTerm() {
      this.renderInterval = window.setInterval(() => {
        for (let i = 0; i < this.times; i++) {
          this.term.write('============开始' + Date.now())
          this.writeTerm()
          this.term.write('============结束' + Date.now())
        }
      }, 1000)
    },
    writeTerm() {
      const term = this.term
      term.write('\n\r');
      term.write('\n\r\x1b[37m');
      term.write('Box styles:       ┎┰┒┍┯┑╓╥╖╒╤╕ ┏┳┓┌┲┓┌┬┐┏┱┐\n\r');
      term.write('┌─┬─┐ ┏━┳━┓ ╔═╦═╗ ┠╂┨┝┿┥╟╫╢╞╪╡ ┡╇┩├╊┫┢╈┪┣╉┤\n\r');
      term.write('│ │ │ ┃ ┃ ┃ ║ ║ ║ ┖┸┚┕┷┙╙╨╜╘╧╛ └┴┘└┺┛┗┻┛┗┹┘\n\r');
      term.write('├─┼─┤ ┣━╋━┫ ╠═╬═╣ ┏┱┐┌┲┓┌┬┐┌┬┐ ┏┳┓┌┮┓┌┬┐┏┭┐\n\r');
      term.write('│ │ │ ┃ ┃ ┃ ║ ║ ║ ┡╃┤├╄┩├╆┪┢╅┤ ┞╀┦├┾┫┟╁┧┣┽┤\n\r');
      term.write('└─┴─┘ ┗━┻━┛ ╚═╩═╝ └┴┘└┴┘└┺┛┗┹┘ └┴┘└┶┛┗┻┛┗┵┘\n\r');
      term.write('\n\r');
      term.write('Other:\n\r');
      term.write('╭─╮ ╲ ╱ ╷╻╎╏┆┇┊┋ ╺╾╴ ╌╌╌ ┄┄┄ ┈┈┈\n\r');
      term.write('│ │  ╳  ╽╿╎╏┆┇┊┋ ╶╼╸ ╍╍╍ ┅┅┅ ┉┉┉\n\r');
      term.write('╰─╯ ╱ ╲ ╹╵╎╏┆┇┊┋\n\r');
      term.write('\n\r');
      term.write('All box drawing characters:\n\r');
      term.write('─ ━ │ ┃ ┄ ┅ ┆ ┇ ┈ ┉ ┊ ┋ ┌ ┍ ┎ ┏\n\r');
      term.write('┐ ┑ ┒ ┓ └ ┕ ┖ ┗ ┘ ┙ ┚ ┛ ├ ┝ ┞ ┟\n\r');
      term.write('┠ ┡ ┢ ┣ ┤ ┥ ┦ ┧ ┨ ┩ ┪ ┫ ┬ ┭ ┮ ┯\n\r');
      term.write('┰ ┱ ┲ ┳ ┴ ┵ ┶ ┷ ┸ ┹ ┺ ┻ ┼ ┽ ┾ ┿\n\r');
      term.write('╀ ╁ ╂ ╃ ╄ ╅ ╆ ╇ ╈ ╉ ╊ ╋ ╌ ╍ ╎ ╏\n\r');
      term.write('═ ║ ╒ ╓ ╔ ╕ ╖ ╗ ╘ ╙ ╚ ╛ ╜ ╝ ╞ ╟\n\r');
      term.write('╠ ╡ ╢ ╣ ╤ ╥ ╦ ╧ ╨ ╩ ╪ ╫ ╬ ╭ ╮ ╯\n\r');
      term.write('╰ ╱ ╲ ╳ ╴ ╵ ╶ ╷ ╸ ╹ ╺ ╻ ╼ ╽ ╾ ╿\n\r');
      term.write('Box drawing alignment tests:\x1b[31m                                          █\n\r');
      term.write('                                                                      ▉\n\r');
      term.write('  ╔══╦══╗  ┌──┬──┐  ╭──┬──╮  ╭──┬──╮  ┏━━┳━━┓  ┎┒┏┑   ╷  ╻ ┏┯┓ ┌┰┐    ▊ ╱╲╱╲╳╳╳\n\r');
      term.write('  ║┌─╨─┐║  │╔═╧═╗│  │╒═╪═╕│  │╓─╁─╖│  ┃┌─╂─┐┃  ┗╃╄┙  ╶┼╴╺╋╸┠┼┨ ┝╋┥    ▋ ╲╱╲╱╳╳╳\n\r');
      term.write('  ║│╲ ╱│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╿ │┃  ┍╅╆┓   ╵  ╹ ┗┷┛ └┸┘    ▌ ╱╲╱╲╳╳╳\n\r');
      term.write('  ╠╡ ╳ ╞╣  ├╢   ╟┤  ├┼─┼─┼┤  ├╫─╂─╫┤  ┣┿╾┼╼┿┫  ┕┛┖┚     ┌┄┄┐ ╎ ┏┅┅┓ ┋ ▍ ╲╱╲╱╳╳╳\n\r');
      term.write('  ║│╱ ╲│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╽ │┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▎\n\r');
      term.write('  ║└─╥─┘║  │╚═╤═╝│  │╘═╪═╛│  │╙─╀─╜│  ┃└─╂─┘┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▏\n\r');
      term.write('  ╚══╩══╝  └──┴──┘  ╰──┴──╯  ╰──┴──╯  ┗━━┻━━┛           └╌╌┘ ╎ ┗╍╍┛ ┋  ▁▂▃▄▅▆▇█\n\r');
      term.write('Box drawing alignment tests:\x1b[32m                                          █\n\r');
      term.write('                                                                      ▉\n\r');
      term.write('  ╔══╦══╗  ┌──┬──┐  ╭──┬──╮  ╭──┬──╮  ┏━━┳━━┓  ┎┒┏┑   ╷  ╻ ┏┯┓ ┌┰┐    ▊ ╱╲╱╲╳╳╳\n\r');
      term.write('  ║┌─╨─┐║  │╔═╧═╗│  │╒═╪═╕│  │╓─╁─╖│  ┃┌─╂─┐┃  ┗╃╄┙  ╶┼╴╺╋╸┠┼┨ ┝╋┥    ▋ ╲╱╲╱╳╳╳\n\r');
      term.write('  ║│╲ ╱│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╿ │┃  ┍╅╆┓   ╵  ╹ ┗┷┛ └┸┘    ▌ ╱╲╱╲╳╳╳\n\r');
      term.write('  ╠╡ ╳ ╞╣  ├╢   ╟┤  ├┼─┼─┼┤  ├╫─╂─╫┤  ┣┿╾┼╼┿┫  ┕┛┖┚     ┌┄┄┐ ╎ ┏┅┅┓ ┋ ▍ ╲╱╲╱╳╳╳\n\r');
      term.write('  ║│╱ ╲│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╽ │┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▎\n\r');
      term.write('  ║└─╥─┘║  │╚═╤═╝│  │╘═╪═╛│  │╙─╀─╜│  ┃└─╂─┘┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▏\n\r');
      term.write('  ╚══╩══╝  └──┴──┘  ╰──┴──╯  ╰──┴──╯  ┗━━┻━━┛           └╌╌┘ ╎ ┗╍╍┛ ┋  ▁▂▃▄▅▆▇█\n\r');
    },
    stopWriteTerm() {
      window.clearInterval(this.renderInterval)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#terminal {
  position: relative;
  height: 100%;
}
</style>
