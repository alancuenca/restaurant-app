import "./FoodMenu.css"

function FoodMenu() {
  return (
    <div id="FoodMenu">
      <div className="menu-container">
        <div className="menu-category breakfast">
          <h4>Breakfast</h4>
          <ul>
            <li>
              <div className="menu-item">
                <div className="menu-item-name">Egg and Bacon</div>
                <div className="menu-item-description">Two eggs any style with bacon, toast, and home fries</div>
                <div className="menu-item-price">$9.99</div>
              </div>
            </li>
            <li>
              <div className="menu-item">
                <div className="menu-item-name">French Toast</div>
                <div className="menu-item-description">Three slices of French toast with butter and maple syrup</div>
                <div className="menu-item-price">$8.99</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="menu-category lunch">
          <h4>Lunch</h4>
          <ul>
            <li>
              <div className="menu-item">
                <div className="menu-item-name">Caesar Salad</div>
                <div className="menu-item-description">Romaine lettuce, croutons, Parmesan cheese, and Caesar dressing</div>
                <div className="menu-item-price">$10.99</div>
              </div>
            </li>
            <li>
              <div className="menu-item">
                <div className="menu-item-name">Cheeseburger</div>
                <div className="menu-item-description">Beef patty with American cheese, lettuce, tomato, and fries</div>
                <div className="menu-item-price">$12.99</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="menu-category dinner">
          <h4>Dinner</h4>
          <ul>
            <li>
              <div className="menu-item">
                <div className="menu-item-name">Filet Mignon</div>
                <div className="menu-item-description">8oz steak with mashed potatoes and sautéed green beans</div>
                <div className="menu-item-price">$29.99</div>
              </div>
            </li>
            <li>
              <div className="menu-item">
                <div className="menu-item-name">Grilled Salmon</div>
                <div className="menu-item-description">Fresh grilled salmon with rice pilaf</div>
                <div className="menu-item-price">$19.99</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default FoodMenu