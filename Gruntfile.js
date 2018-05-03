module.exports = function (grunt) {
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: "gm",
          sizes: [
            { name: "320", quality: 60, width: 320 },
            { name: "640", quality: 60, width: 640 },
            { name: "800", quality: 60, width: 800 },
          ]
        },
        files: [
          {
            expand: true,
            src: ["*.{jpg,png}"],
            cwd: "src/",
            dest: "images/"
          }
        ]
      }
    },
    cwebp: {
      dynamic: {
        options: {
          q: 60
        },
        files: [
          {
            expand: true,
            cwd: "images/",
            src: ["*.jpg"],
            dest: "images/"
          }
        ]
      }
    }
  });
  grunt.loadNpmTasks("grunt-responsive-images");
  grunt.loadNpmTasks("grunt-cwebp");
  grunt.registerTask("default", ["responsive_images", "cwebp"]);
};