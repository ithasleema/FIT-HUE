document.getElementById('fashionForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Get user inputs
    const gender = document.getElementById('gender').value;
    const bodyType = document.getElementById('bodyType').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const skinTone = document.getElementById('skinTone').value;
  
    // Generate recommendations based on inputs
    const recommendations = generateRecommendations(gender, bodyType, weight, height, skinTone);
  
    // Display recommendations
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = `
      <h2>Your Fashion Recommendations</h2>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Body Type:</strong> ${bodyType}</p>
      <p><strong>Weight:</strong> ${weight} kg</p>
      <p><strong>Height:</strong> ${height} cm</p>
      <p><strong>Skin Tone:</strong> ${skinTone}</p>
      <p><strong>Recommendations:</strong> ${recommendations}</p>
    `;
  });
  
  function generateRecommendations(gender, bodyType, weight, height, skinTone) {
    let recommendations = [];
  
    // Body Type Recommendations
    if (bodyType === 'hourglass') {
      recommendations.push("Fitted dresses, high-waisted pants, and belted outfits to accentuate your waist.");
    } else if (bodyType === 'rectangle') {
      recommendations.push("Layered outfits, A-line skirts, and peplum tops to create curves.");
    } else if (bodyType === 'pear') {
      recommendations.push("Dark-colored bottoms, flowy tops, and structured jackets to balance your silhouette.");
    } else if (bodyType === 'apple') {
      recommendations.push("V-neck tops, empire waist dresses, and straight-leg pants to elongate your torso.");
    } else if (bodyType === 'invertedTriangle') {
      recommendations.push("A-line skirts, wide-leg pants, and tops with detailing at the hips to balance your shoulders.");
    }
  
    // Skin Tone Recommendations
    if (skinTone === 'fair') {
      recommendations.push("Pastel colors like light pink, mint green, and baby blue complement your skin tone.");
    } else if (skinTone === 'medium') {
      recommendations.push("Earthy tones like olive green, mustard yellow, and burnt orange suit you well.");
    } else if (skinTone === 'olive') {
      recommendations.push("Jewel tones like emerald green, sapphire blue, and deep purple enhance your complexion.");
    } else if (skinTone === 'dark') {
      recommendations.push("Bright colors like royal blue, vibrant red, and electric purple look stunning on you.");
    }
  
    return recommendations.join(' ');
  }