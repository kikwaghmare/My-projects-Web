var Minimal_Angle = (h, m) => 
{
  let hour = 0.5 * (h * 60 + m);
  
            let minute = 6 * m;
            
            let angle = Math.abs(hour - minute);
            
             let Angle = Math.min(360 - angle, angle);
             
            return Angle;       
};
 