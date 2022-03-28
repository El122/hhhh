using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WindowsFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            label1.Text = "Флаг России";
            pictureBox1.Image = System.Drawing.Image.FromFile("D:\\TemplateData\\картиночки для нужно\\18ae617c-40a1-4974-856b-1c0c34b563d5.jpg");
            label1.Font = new Font(label1.Font.Name, 14,Font.Style, label1.Font.Unit);
        }

        private void button2_Click(object sender, EventArgs e)
        {
        }

        private void button5_Click(object sender, EventArgs e)
        {
            label1.Text = "Флаг Англии";
            pictureBox1.Image = System.Drawing.Image.FromFile("D:\\TemplateData\\картиночки для нужно\\463601.jpg");
            label1.Font = new Font(label1.Font.Name, 14, Font.Style, label1.Font.Unit);
        }
    }
}
