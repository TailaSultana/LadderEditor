function Load() {
    let rungstring;
    var fr = new FileReader();
    fr.onload =function () {
        rungstring = this.result;
        
    };
    fr.readAsText(this.files[0]);
    var jsonObj = JSON.parse(rungstring);
    console.log("json: ", jsonObj);

    SubrData.SetRungMatrix(LadEditor.GetMatrixData(), rungref);
			SubrData.SetRungIL(LadEditor.GetILData(), rungref);
			SubrData.SetRungComment(LadEditor.GetComment(), rungref);
			SubrData.SetRungType(LadEditor.GetRungType(), rungref);
   /* var rungref = CurrentRung;
    // Update the static rung.
		SubrControl.ReplaceStaticRung(SubrData.GetRungData(rungref), rungref);
		SubrControl.ReplaceStaticILRung(SubrData.GetRungIL(rungref), rungref);
		// Show the static rung.
		var rungtype = SubrData.GetRungType(rungref);
		SubrControl.ShowStaticRung(rungref, rungtype);
    return rungstring;*/
}