package com.beef.controllers.file;

import com.beef.core.utils.FileUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@RestController
public class FileController {

    @GetMapping(value = "/file/{imageId:.+}")
    @ResponseBody
    public byte[] getImage(@PathVariable String imageId, HttpServletRequest request) throws IOException {
        try {
            return FileUtils.getImage(request, imageId);
        } catch(IOException e) {
            return FileUtils.getEmptyImage(request);
        }
    }
}
